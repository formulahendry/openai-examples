import os
import requests
import json
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv('API_KEY')
base_url = os.getenv('BASE_URL')
deployment_name = os.getenv('DEPLOYMENT_NAME_GPT4')

url = base_url + "/openai/deployments/" + deployment_name + \
    "/chat/completions?api-version=2023-03-15-preview"
payload = {
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Does Azure OpenAI support customer managed keys?"},
        {"role": "assistant",
            "content": "Yes, customer managed keys are supported by Azure OpenAI."},
        {"role": "user", "content": "Do other Azure Cognitive Services support this too?"}
    ]
}

r = requests.post(url,
                  headers={
                      "api-key": api_key,
                      "Content-Type": "application/json"
                  },
                  json=payload
                  )

response = json.loads(r.text)
print(response['choices'][0]['message']['content'])

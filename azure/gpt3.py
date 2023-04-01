import os
import requests
import json
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv('API_KEY')
base_url = os.getenv('BASE_URL')
deployment_name = os.getenv('DEPLOYMENT_NAME_GPT3')

url = base_url + "/openai/deployments/" + \
    deployment_name + "/completions?api-version=2022-12-01"
prompt = "How to write a Teams App?"
payload = {
    "prompt": prompt,
    "max_tokens": 500
}

r = requests.post(url,
                  headers={
                      "api-key": api_key,
                      "Content-Type": "application/json"
                  },
                  json=payload
                  )

response = json.loads(r.text)
print(response["choices"][0]["text"])

# formatted_response = json.dumps(response, indent=4)
# print(formatted_response)

const prompt = "Olá, como vai você?";
const apiKey = "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";
const model = "gpt-3.5-turbo";

fetch(`https://api.openai.com/v1/engines/${model}/completions`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    prompt: prompt,
    max_tokens: 50,
    temperature: 0.7,
    n: 1,
    stop: "\n",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data.choices[0].text))
  .catch((err) => console.error(err));

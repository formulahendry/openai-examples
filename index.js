async function main() {
    require('dotenv').config()
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "PHP code for quick sort",
        temperature: 0,
        max_tokens: 2048,
    });

    console.log(response.data.choices[0].text);
}

main();
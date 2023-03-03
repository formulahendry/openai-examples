async function main() {
    require('dotenv').config()
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": "Who won the world series in 2020?" },
            { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
            { "role": "user", "content": "Where was it played?" }
        ],
    });
    console.log(completion.data.choices[0].message);
}

main();
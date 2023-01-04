async function main() {
    require('dotenv').config()
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
        model: "code-davinci-002",
        prompt: "#JavaScript to Python:\nJavaScript: \ndogs = [\"bill\", \"joe\", \"carl\"]\ncar = []\ndogs.forEach((dog) {\n    car.push(dog);\n});\n\nPython:",
        temperature: 0,
        max_tokens: 128,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["#"],
    });

    console.log(response.data.choices[0].text);
}

main(); 
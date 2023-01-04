async function main() {
    require('dotenv').config()
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createImage({
        prompt: "a white siamese cat",
        n: 1,
        size: "256x256",
    });

    image_url = response.data.data[0].url;

    console.log(image_url);
}

main();
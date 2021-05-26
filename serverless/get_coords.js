const fetch = require("node-fetch");

// define weather API key
const { WEATHER_API_KEY } = process.env;

// second serverless function
exports.handler = async (event, context) => {
    const params = JSON.parse(event.body);
    const { text, units } = params;
    const regex = /^\d+$/g;
    const flag = regex.test(text) ? "zip" : "q";
    const url = `https://api.openweathermap.org/data/2.5/weather?${flag}=${text}&units=${units}&appid=${WEATHER_API_KEY}`;

    // encode url
    const encodedUrl = encodeURI(url);

    try {
        const dataStream = await fetch(encodedUrl);
        const jsonData = await dataStream.json();
        return {
            statusCode: 200,
            body: JSON.stringify(jsonData)
        }
    } catch (err) {
        return { statusCode: 422, body: err.stack};
    }
}


export const setLocationObject = (locationObj, coordsObj) => {
    const { lat, lon, name, unit } = coordsObj;
    locationObj.setLat(lat);
    locationObj.setLon(lon);
    locationObj.setName(name);
    if (unit) {
        locationObj.setUnit(unit);
    }
}

export const getHomeLocation = () => {
    return localStorage.getItem("defaultWeatherLocation");
}

export const getWeatherFromCoords = async (locationObj) => {
    // // code before serverless functions
    // const lat = locationObj.getLat();
    // const lon = locationObj.getLon();
    // const units = locationObj.getUnit();
    // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${WEATHER_API_KEY}`;

    // try {
    //     const weatherStream = await fetch(url);
    //     const weatherJson = await weatherStream.json();
    //     return weatherJson;
    // } catch (err) {
    //     console.log(err);
    // }

    // code after serverless functions

    const urlDataObj = {
        lat: locationObj.getLat(),
        lon: locationObj.getLon(),
        units: locationObj.getUnit()
    };

    try {
        const weatherStream = await fetch("./netlify/functions/get_weather", {
            method: "POST", // post request instead of get request
            body: JSON.stringify(urlDataObj)
        });
        return weatherJson;
    } catch (err) {
        console.log(err);
    }

}

export const getCoordsFromApi = async (entryText, units) => {
    
    // // code before serverless functions
    // const regex = /^\d+$/g;
    // const flag = regex.test(entryText) ? "zip" : "q";
    // const url = `https://api.openweathermap.org/data/2.5/weather?${flag}=${entryText}&units=${units}&appid=${WEATHER_API_KEY}`;
    // const encodedUrl = encodeURI(url);

    // try {
    //     const dataStream = await fetch(encodedUrl);
    //     const jsonData = await dataStream.json();
    //     return jsonData;
    // } catch (err) {
    //     console.error(err.stack);
    // }

    // code after serverless functions
    const urlDataObj = {
        text: entryText,
        units: units
    };
    try {
        const dataStream = await fetch("./.netlify/functions/get_coords", {
            method: "POST",
            body: JSON.stringify(urlDataObj)
        });
        const jsonData = await dataStream.json();
        return jsonData;
    } catch (err) {
        console.error(err);
    }

}

export const cleanText = (text) => {
    // clean up text-entry
    // remove spaces in text (i.e.: two or more spaces in a row)

    const regex = / {2,}/g;
    const entryText = text.replaceAll(regex, " ").trim(); // replaces 2 spaces with 1 space and trim back and front
    return entryText;
}

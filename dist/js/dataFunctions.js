export const setLocationObject = (locationObj, coordsObj) => {
    const { lat, long, name, unit } = coordsObj;
    locationObj.setLatitude(lat);
    locationObj.setLongitude(long);
    locationObj.setName(name);
    if (unit) {
        locationObj.setUnit(unit);
    }
}

export const getHomeLocation = () => {
    return localStorage.getItem("defaultWeatherLocation");
}

export const cleanText = (text) => {
    // clean up text-entry
    // remove spaces in text (i.e.: two or more spaces in a row)

    const regex = / {2,}/g;
    const entryText = text.replaceAll(regex, " ").trim(); // replaces 2 spaces with 1 space and trim back and front
    return entryText;
}

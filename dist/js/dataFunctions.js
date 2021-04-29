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

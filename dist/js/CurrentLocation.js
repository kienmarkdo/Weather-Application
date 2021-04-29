export default class CurrentLocation {

    constructor() {
        this._name = "Current Location";
        this._lat = null; // latitude
        this._lon = null; // longitude
        this._unit = "metric";
    } // end of constructor


    toggleUnit() {
        this._unit = this._unit === "metric" ? "imperial" : "metric";
    }


    // =====================  Getters  =====================

    getName() {
        return this._name;
    }

    getLatitude() {
        return this._lat;
    }

    getLongitude() {
        return this._lon;
    }

    getUnit() {
        return this._unit;
    }


    // =====================  Setters  =====================

    setName(name) {
        this._name = name;
    }

    setLatitude(lat) {
        this._lat = lat;
    }

    setLongitude(lon) {
        this._lon = lon;
    }

    setUnit(unit) {
        this._unit = unit;
    }


} // end of class
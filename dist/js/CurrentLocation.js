export default class CurrentLocation {

    constructor() {
        this._name = "Current Location";
        this._lat = null; // latitude
        this._long = null; // longitude
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
        return this._long;
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

    setLongitude(long) {
        this._long = long;
    }

    setUnit(unit) {
        this._unit = unit;
    }


} // end of class
export default class CurrentLocation {

    constructor() {
        this._name = "Current Location";
        this._lat = null; // latitude
        this._lon = null; // longitude
        this._unit = "metric";
    } // end of constructor


    toggleUnit() {
        // this._unit = this._unit === "metric" ? "imperial" : "metric";
        if (this._unit === "metric") {
            this._unit = "imperial";
        }
        else if (this._unit === "imperial") {
            this._unit = "metric"
        }
        else {
            console.log("UNIT ERROR");
        }
    }


    // =====================  Getters  =====================

    getName() {
        return this._name;
    }

    getLat() {
        return this._lat;
    }

    getLon() {
        return this._lon;
    }

    getUnit() {
        return this._unit;
    }


    // =====================  Setters  =====================

    setName(name) {
        this._name = name;
    }

    setLat(lat) {
        this._lat = lat;
    }

    setLon(lon) {
        this._lon = lon;
    }

    setUnit(unit) {
        this._unit = unit;
    }


} // end of class
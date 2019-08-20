const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibWFuaXNoMzc0OSIsImEiOiJjanpndG5waW4wcGhrM25sanZiMno3N2FvIn0.fl8QZrujEw2tfU99F7fV-A&limit=1";
    
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('unable to connect to the location services!', undefined);
        } 
        else if(response.body.features.length === 0){
            callback('unable to connect to the location. try another search.', undefined);
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;
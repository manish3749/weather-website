const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/cc586655ee8c33a3de3c2d4627c51df5/' + encodeURIComponent(latitude) 
                + ',' + encodeURIComponent(longitude);
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to the weather server', undefined);
        } 
        else if (response.body.error){
            callback('Unable to find the location', undefined);
        }
        else{
            callback(undefined, 'It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + 
            response.body.currently.precipProbability + '% chance of rain.');
        }
    })
}

module.exports = forecast;
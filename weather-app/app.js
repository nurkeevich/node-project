const request = require('request');

const url = 'https://api.darksky.net/forecast/7f03d3658fc48ea57349cc4cb22c28a7/37.8267,-122.4233';
const urlPoint = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Chicago.json?access_token=pk.eyJ1IjoibnVya2VldmljaCIsImEiOiJjanppb2x4YngwMWd6M29vYWpyOTlpNjczIn0.ZY-TKmQ25vOIUcA4rKh0gA&limit=1';

// weather api
request(
    {
        url: url,
        json: true
    },
    (error, response) => {

        console.log(error)

        currently = response.body.currently;
        daily = response.body.daily;
        console.log(daily.summary);
        console.log(`Temperature: ${currently.temperature}`);
        console.log(`Possibility of rain: ${currently.precipProbability}%`);
    }
)

// Geocoding
// Address -> Lat / long -> Weather

// Goal: Print the lat/long for Log Angeles

// Geocode api
// request(
//     {
//         url: urlPoint,
//         json: true
//     },
//     (error, response) => {
//         longitude = response.body.features[0].center[0];
//         latitude = response.body.features[0].center[1];
//         console.log(longitude);
//         console.log(latitude);
//     }
// )
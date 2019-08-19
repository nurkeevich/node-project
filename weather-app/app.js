const request = require('request');

const url = 'https://api.darksky.net/forecast/7f03d3658fc48ea57349cc4cb22c28a7/37.8267,-122.4233';
const urlPoint = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Chicago.json?access_token=pk.eyJ1IjoibnVya2VldmljaCIsImEiOiJjanppb2x4YngwMWd6M29vYWpyOTlpNjczIn0.ZY-TKmQ25vOIUcA4rKh0gA&limit=1';

// weather api
// request(
//     {
//         url: url,
//         json: true
//     },
//     (error, response) => {
//         if (error) {
//             console.log('Unable connect to weather service!')
//         } else if (response.body.error) {
//             console.log('Unable to find location!')
//         } else {

//             currently = response.body.currently;
//             daily = response.body.daily;
//             console.log(daily.summary);
//             console.log(`Temperature: ${currently.temperature}`);
//             console.log(`Possibility of rain: ${currently.precipProbability}%`);

//         }
//     }
// )

// Goal: Handle errors for geocoding request

// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app.

// Geocode api
// request(
//     {
//         url: urlPoint,
//         json: true
//     },
//     (error, response) => {
//         if (error) {
//             console.log('Unable to connect weather service!')
//         } else if (response.body.features.length === 0) {
//             console.log('Unable to locate location!')
//         } else {
//             longitude = response.body.features[0].center[0];
//             latitude = response.body.features[0].center[1];
//             console.log(longitude);
//             console.log(latitude);
//         }
//     }
// )

const getLatLong = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibnVya2VldmljaCIsImEiOiJjanppb2x4YngwMWd6M29vYWpyOTlpNjczIn0.ZY-TKmQ25vOIUcA4rKh0gA&limit=1`;

    request(
        {
            url: url,
            json: true
        },
        (error, response) => {

            if (error) {
                console.log('Unable to connect weather app!');
            } else if (response.body.features.length === 0) {
                console.log('Unable to locate address!');
            } else {
                longitude = response.body.features[0].center[0];
                latitude = response.body.features[0].center[1];
                callback([latitude, longitude]);
            }
        }
    )
}

getLatLong('chicago', (error, latLongArray) => {
    console.log(latLongArray[0]);
    console.log(latLongArray[1]);
})
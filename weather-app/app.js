const request = require('request');

const url = 'https://api.darksky.net/forecast/7f03d3658fc48ea57349cc4cb22c28a7/37.8267,-122.4233';

// request url
request(
    {
        url: url,
        json: true
    },
    (error, response) => {
        console.log(response.body.currently);
    }
);

// Goal: Print a small forecast to the user
// 1. Print: "it is currently 58.55 degrees out. There is a 0% chance of rain."
// 2. Test your work!

request(
    {
        url: url,
        json: true
    },
    (error, response) => {
        console.log(`It is currently ${response.body.currently.temperature} degrees out. There is `)
    }
)


const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Goal: Use both destructuring and property shorthand in weather app

// 1. Use destructuring in app.js, forecast.js and geocode.js
// 2. Use property shorthand in forecast.js and geocode.js
// 3. Test your work and ensure app still works

const location = process.argv[2];

if (!location) {
    console.log('Please provide location?');
} else {
    geocode(location, (error, { latitude, longitude, location }) => {
        if (error) {
            console.log(error);
        } else {
            forecast(latitude, longitude, (error, { summary, temperature, rainProbability }) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(location);
                    console.log(`Weather: ${summary}`);
                    console.log(`Temperature: ${temperature}`)
                    console.log(`Rain probability: ${rainProbability}`);
                }
            })
        }
    })
}

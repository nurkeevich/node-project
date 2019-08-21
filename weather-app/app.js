const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Goal

// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple locations

const location = process.argv[2];

if (!location) {
    console.log('Please provide location?');
} else {
    geocode(location, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            forecast(data.latitude, data.longitude, (error, forecast) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(data.location);
                    console.log(`Weather: ${forecast.summary}\nTemperature: ${forecast.temperature}\nRain probability: ${forecast.rainProbability}`);
                }
            })
        }
    })
}

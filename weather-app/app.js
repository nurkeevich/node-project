const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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

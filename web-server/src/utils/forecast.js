const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/7f03d3658fc48ea57349cc4cb22c28a7/${latitude},${longitude}?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags`;

    request(
        {
            url,
            json: true
        },
        (error, { body }) => {
            if (error) {
                callback(
                    'Unable to get temperature at this moment!',
                    undefined
                );
            } else if (body.code === 400) {
                callback(
                    'Temperature temporarily unable!',
                    undefined
                );
            } else {
                callback(
                    undefined,
                    `${body.currently.summary}. It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain`
                )
            }
        }
    )
}

module.exports = forecast;
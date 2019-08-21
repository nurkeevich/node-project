const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/7f03d3658fc48ea57349cc4cb22c28a7/${latitude},${longitude}?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags`;

    request(
        {
            url: url,
            json: true
        },
        (error, response) => {
            if (error) {
                callback(
                    'Unable to get temperature at this moment!',
                    undefined
                );
            } else if (response.body.code === 400) {
                callback(
                    'Temperature temporarily unable!',
                    undefined
                );
            } else {
                callback(
                    undefined,
                    {
                        summary: response.body.currently.summary,
                        rainProbability: response.body.currently.precipProbability,
                        temperature: response.body.currently.temperature
                    }
                )
            }
        }
    )
}

module.exports = forecast;
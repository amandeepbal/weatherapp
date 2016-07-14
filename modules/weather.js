var request = require('request');

module.exports = function (location, callback) {
    var loc = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + loc + ',&units=metric&APPID=39ffaf86bb4b4a372cb112fa56c88c68';

    if (!location) {
        return callback('No Location provided');
    }

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error) {
            callback('It\'s ' + body.main.temp + '°C at ' + body.name);
        } else {
            callback('Unable to fetch weather');
        }
    });
};

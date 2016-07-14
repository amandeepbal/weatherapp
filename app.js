var weather =  require('./modules/weather.js');
var location =  require('./modules/location.js');
var argv =  require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        describe: 'Location to fetch weather for',
        type: 'styring'
    })
    .help('help')
    .argv;

if (typeof argv.l === 'string' &&  argv.l.length > 0) {
    weather(argv.l, function (currentWeather) {
    console.log(currentWeather);
    });
} else {
    location(function(location){
        if(location){
            weather(location.city, function (currentWeather) {
            console.log(currentWeather);
            });
        } else {
            console.log('Unable to guess location');
        }
    });
}

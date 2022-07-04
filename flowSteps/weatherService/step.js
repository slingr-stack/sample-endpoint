/**
 * Returns some real time weather characteristics given a city
 *
 * @param {string} city, City name, if nothing found it will use a default city (NY)
 */
step.weatherService = function (city) {
    var data =  endpoint.weather({city: city});

    return [
            data['city'],
            data['temperature'],
            data['pressure'],
            data['humidity']
    ];
};
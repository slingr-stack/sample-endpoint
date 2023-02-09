/**
 * Returns some real time weather characteristics given a city
 *
 * @param {object} inputs {string} city, City name, if nothing found it will use a default city (NY)
 */
step.weatherService = function (inputs) {
    var data =  endpoint.weather({city: inputs.city});
    return [
            data['city'],
            data['temperature'],
            data['pressure'],
            data['humidity']
    ];
};
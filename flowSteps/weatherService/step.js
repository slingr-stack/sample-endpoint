/**
 * Returns some real time weather characteristics given a city
 *
 * @param {object} stepConfig.inputs {string} city, City name, if nothing found it will use a default city (NY)
 * @param {object} stepConfig.context {object} context
 */
step.weatherService = function (stepConfig) {
    var data =  endpoint.weather({city: stepConfig.inputs.city});

    return [
            data['city'],
            data['temperature'],
            data['pressure'],
            data['humidity']
    ];
};
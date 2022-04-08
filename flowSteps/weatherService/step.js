/**
 * Returns some real time weather characteristics given a city
 *
 * @param {string} city, City name, if nothing found it will use a default city (NY)
 */
step.weatherService = function (city) {
    var data =  endpoint.weather({city: city});

    return {
        "city": data['city'],
        "temperature": data['temperature'],
        "pressure": data['pressure'],
        "humidity": data['humidity']
    };
};
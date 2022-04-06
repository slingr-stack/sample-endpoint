/**
 * Returns some real time weather characteristics given a city
 *
 * @param {string} city, City name, if nothing found it will use a default city (NY)
 */
step.weatherService = function (city) {
    return endpoint.weather({city: city});
};
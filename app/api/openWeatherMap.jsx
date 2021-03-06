var axios = require("axios");

var key = '9ae3eba429d2830ce803d555824e5fad';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + key + '&units=metric';

module.exports = {
    
    getTemp: function (location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(err) {
            throw new Error("Unable to fetch weather of that location.");
        });
    }
}
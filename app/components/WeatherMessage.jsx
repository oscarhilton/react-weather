var React = require("react");

var WeatherMessage = ({temp, location}) => {
       return (
         <h3 className="text-center">It is currently {temp}&#8451; in {location}.</h3>
    );
} 

module.exports = WeatherMessage;

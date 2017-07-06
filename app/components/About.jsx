var React = require("react");

var About = (props) => {
       return (
            <div>
                <h1 className="text-center">About</h1>
                <p>Hello! This is a React Weather App that I put together following along with a course.</p>
                <p>If you are having problems searching, make sure to use the HTTP:// not HTTPS:// URL as there are issues with Cross-Origins. Looking for a solution.</p>
                <p>Here are some of the tools I used:</p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react">React</a> - This was the JS framework used.
                    </li>
                    <li>
                        <a href="http://openweathermap.org">Open Weather Map</a> - I used the Open Weather Map API to retreive my weather information!
                    </li>
                </ul>
            </div>
    );
} 

module.exports = About;

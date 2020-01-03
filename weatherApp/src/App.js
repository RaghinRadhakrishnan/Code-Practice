/* eslint-disable */
import React, { Component } from 'react';
import Weather from "./app-component/weather.component";
import Form from "./app-component/form.component";
import Hover from "./app-component/hover.component";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
const Api_key = "429736441cf3572838aa10530929f7cd";
class App extends React.Component {
  constructor(){
    super();
    this.state={
      city: '',
      country: '',
      icon: '',
      temp_celcius: '',
      temp_max: '',
      temp_min: '',
      description: ''
    };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  };
    celcius(temp){
      const cel=Math.floor(temp-273.15);
      return cel;
    };

    get_WeatherIcon(icons, rangeId) {
      switch (true) {
        case rangeId >= 200 && rangeId < 232:
          this.setState({ icon: icons.Thunderstorm });
          break;
        case rangeId >= 300 && rangeId <= 321:
          this.setState({ icon: icons.Drizzle });
          break;
        case rangeId >= 500 && rangeId <= 521:
          this.setState({ icon: icons.Rain });
          break;
        case rangeId >= 600 && rangeId <= 622:
          this.setState({ icon: icons.Snow });
          break;
        case rangeId >= 701 && rangeId <= 781:
          this.setState({ icon: icons.Atmosphere });
          break;
        case rangeId === 800:
          this.setState({ icon: icons.Clear });
          break;
        case rangeId >= 801 && rangeId <= 804:
          this.setState({ icon: icons.Clouds });
          break;
        default:
          this.setState({ icon: icons.Clouds });
      }
    }
  

getWeather = async(e)=>{
  e.preventDefault();
  const city= e.target.elements.city.value;
  const country= e.target.elements.country.value;
  const api_key = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`);
  const response = await api_key.json();
  console.log(response);
  this.setState({
    city: `${response.name},${response.sys.country}`,
    temp_celcius: this.celcius(response.main.temp),
    temp_max: this.celcius(response.main.temp_max),
    temp_min: this.celcius(response.main.temp_min),
    description: response.weather[0].description
  });
  this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
};
  render() {
    return (
      <div className="App">
          <Form loadWeather={this.getWeather}/>
          {/* <Hover onHover={this.getWeather}/> */}
          <Weather 
          city={this.state.city}
          country={this.state.country}
          temp_celcius={this.state.temp_celcius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min} 
          description={this.state.description}
          weatherIcon={this.state.icon} />
      </div>
    );
  }
}

export default App;

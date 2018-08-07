import React from "react";

import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "bb15ac065805d990c0b4c059c4f60741";

class App extends React.Component {
  state={
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    load: false,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // const apiurl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    // this.api_call = await fetch (apiurl + API_KEY);
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      });
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
      });
    }
  }
  render() {
    return (
      <div>
          <div className="main">
              <div className="row">
                </div>
                <div className="">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
          </div>
      </div>
    );
  }
};

export default App;
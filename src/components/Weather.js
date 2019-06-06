import React, { Component, Fragment } from 'react';

import { AppSectionHeader, AppSectionFooter, WeatherInfo, WeatherForecast } from './'
import WeatherIcons from '../assets/data/weather-icons.json'; 
import SVG from 'react-inlinesvg';
const apiKey = "8d2de98e089f1c28e1a22fc19a24ef04";

class Weather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            city: '',
            cityId: '2736469',
            country: '',

            weather_temp: '',
            weather_temp_min: '',
            weather_temp_max: '',
            weather_humidity: '',
            weather_pressure: '',
            weather_wind_speed: '',
            weather_wind_deg: '',
            weather_icon: '',
            weather_id: '',
            weather_description: '',

            forecast: '',
        }

        this.cityId = '2736469';

    }

    componentDidMount = () => {
        this.getWeather();
        this.getForecast();
    }


    selectCity = () => {
        let selectCity = document.getElementById("selectCity");
        this.cityId = selectCity.options[selectCity.selectedIndex].value;
    }

    getWeather = async () => {

        this.selectCity();

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${this.cityId}&appid=${apiKey}&units=metric`);

        const response = await api_call.json();

        console.log(response);

        var prefix = 'wi-';
        var code = response.weather[0].id;
        var icon = WeatherIcons[code].icon;

        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
        }

        icon = './assets/img/icons-weather/' + prefix + icon + '.svg';
 
        this.setState({
            city: response.name,
            country: response.sys.country,
            weather_temp: response.main.temp,
            weather_temp_min: response.main.temp_min,
            weather_temp_max: response.main.temp_max,
            weather_humidity: response.main.humidity,
            weather_pressure: response.main.pressure,
            weather_wind_speed: response.wind.speed,
            weather_wind_deg: response.wind.deg,
            weather_icon: icon,
            weather_id: response.weather[0].id,
            weather_description: response.weather[0].description
        })

    }

    getForecast = async () => {

        this.selectCity();

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${this.cityId}&appid=${apiKey}&units=metric`);
        const response = await api_call.json();

        console.log(response);

        this.setState({
            city: response.city.name,
            country: response.city.country,
            forecast: response.list
        })
    }


    render() {
        return (
            <Fragment>
                <AppSectionHeader />
                <div className="container pageBody pageWeather">
                    <div className='row'>
                        <div className='col-md-12 main'>
                            <h3>Weather Info</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 form-container">
                            <form>
                                <label htmlFor="selectCity" className="">City</label>
                                <select className="form-control" id={"selectCity"} defaultValue={"2736469"}>
                                    <option value="2736469">Penafiel</option>
                                    <option value="2735943">Porto</option>
                                </select>
                            </form>
                            <hr />

                            <WeatherInfo className="mt20"
                                weather_id={this.state.weather_id}
                                weather_icon={this.state.weather_icon}
                                description={this.state.weather_description}
                                temp={this.state.weather_temp}
                                temp_min={this.state.weather_temp_min}
                                temp_max={this.state.weather_temp_max}
                                city={this.state.city}
                                country={this.state.country}
                                humidity={this.state.weather_humidity}
                                pressure={this.state.weather_pressure}
                                wind_speed={this.state.weather_wind_speed}
                                wind_deg={this.state.weather_wind_deg}
                            />
                            <hr />
                            <WeatherForecast forecast={this.state.forecast} />
                        </div>
                    </div>
                </div>

                <AppSectionFooter />
            </Fragment>
        )
    }
}


export default Weather
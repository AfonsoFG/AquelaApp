import React, { Component, Fragment } from 'react';
import { AppSectionHeader, AppSectionFooter, WeatherSelect, WeatherInfo, WeatherForecast } from './'
import WeatherIcons from '../assets/data/weather-icons.json'; 
import { cities, apiKey, getWeather } from './WeatherFunctions';

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
    }

    componentDidMount = () => {
        this.handleWeather();
        this.getForecast();
    }


    handleWeather = async () => {
        const teste = await getWeather(this.state.cityId, WeatherIcons);
        this.setState(teste);
    }


    changeCity = (event) => {

        this.setState({
            cityId: event.target.value
        });

        this.handleWeather();
        this.getForecast();
    }

    

    getForecast = async () => {

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${this.state.cityId}&appid=${apiKey}&units=metric`);
        const response = await api_call.json();

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
                            <h3>Weather</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 ">
                            <WeatherSelect id={"selectCity"} defaultValue={this.state.cityId} options={cities} onChange={this.changeCity} />
                            <WeatherInfo
                                weather_id = {this.state.weather_id}
                                weather_icon = {this.state.weather_icon}
                                description = {this.state.weather_description}
                                temp = {Math.round(this.state.weather_temp)}
                                temp_min = {Math.round(this.state.weather_temp_min)}
                                temp_max = {Math.round(this.state.weather_temp_max)}
                                city = {this.state.city}
                                country = {this.state.country}
                                humidity = {this.state.weather_humidity}
                                pressure = {this.state.weather_pressure}
                                wind_speed = {this.state.weather_wind_speed}
                                wind_deg = {this.state.weather_wind_deg}
                            />
                            </div>
                            <div className="col-sm-12">
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
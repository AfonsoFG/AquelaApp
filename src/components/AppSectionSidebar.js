import React, { Component, Fragment } from 'react';
import { AboutSection, WeatherInfo, WeatherSelect } from '.'
import WeatherIcons from '../assets/data/weather-icons.json'; 
import { cities, getWeather } from './WeatherFunctions';

class AppSectionSidebar extends Component {

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
    }

    changeCity = (event) => {

        this.setState({
            cityId: event.target.value
        });

        this.handleWeather();
    }
    
    handleWeather = async () => {
        const teste = await getWeather(this.state.cityId, WeatherIcons);
        this.setState(teste);
    }

    render() {
        return (
        <Fragment>
            <AboutSection/>
            <h5 className="mt20">The Weather</h5>
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
            <WeatherSelect id={"selectCity"} defaultValue={this.state.cityId} options={cities} onChange={this.changeCity} />   
        </Fragment>
        )
    }    
}

export default AppSectionSidebar
import React, { Component, Fragment } from 'react';
import { AppSectionHeader, AppSectionFooter, WeatherSelect, WeatherInfo, WeatherForecast } from './'
import WeatherIcons from '../assets/data/weather-icons.json'; 
// import SVG from 'react-inlinesvg';

const apiKey = "8d2de98e089f1c28e1a22fc19a24ef04";

const cities = {
    '2736469': 'Penafiel',
    '8010691': 'Angra Heroísmo',
    '2270985': 'Beja',
    '2742032': 'Braga',
    '8010461': 'Bragança',
    '2269514': 'Castelo Branco',
    '2740637': 'Coimbra',
    '8010502': 'Évora',
    '2268339': 'Faro',
    '3372783': 'Ponta Delgada',
    '2264508': 'Portalegre',
    '2735943': 'Porto',
    '8010609': 'Santarém',
    '8010625': 'Setúbal',
    '2732773': 'Viana do Castelo',
    '2732438': 'Vila Real',
    '2732265': 'Viseu',
    '2267057': 'Lisboa'
}

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
        this.getWeather();
        this.getForecast();
    }


    changeCity = (event) => {

        this.setState({
            cityId: event.target.value
        });

        this.getWeather();
        this.getForecast();
    }

    getWeather = async () => {

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${this.state.cityId}&appid=${apiKey}&units=metric`);

        const response = await api_call.json();


        var prefix = 'wi-';
        var code = response.weather[0].id;
        var icon = WeatherIcons[code].icon;

        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
        }

        icon = './assets/img/icons-weather/' + prefix + icon + '.svg';
 
        let new_desc = response.weather[0].description;
        new_desc = new_desc.charAt(0).toUpperCase() + new_desc.slice(1);

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
            weather_description: new_desc
        })

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
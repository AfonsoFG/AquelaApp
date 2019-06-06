import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

class WeatherInfo extends Component {

    render() {
        return (

            <div className="weather-info mt20">
                
                 {
                    this.props.weather_icon  && <SVG src={this.props.weather_icon} className="weatherIcon" />
                }
                {
                    this.props.description && <p className="weather__key">
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }
                {
                    this.props.temp && this.props.temp_min && this.props.temp_max &&
                    <p className="weather__key">Temperature:
                        <span className="weather__value">  {this.props.temp} ºC</span> 
                        <span className="weather__value">(min:  {this.props.temp_min} ºC</span> 
                        <span className="weather__value"> max:  {this.props.temp_max} ºC)</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key">Humidity:
                        <span className="weather__value">  {this.props.humidity} %</span>
                    </p>
                }
                {
                    this.props.pressure && <p className="weather__key">Pressure:
                        <span className="weather__value">  {this.props.pressure} hPa</span>
                    </p>
                }
                    {
                    this.props.wind_speed && this.props.wind_deg && <p className="weather__key">Vento:
                        <span className="weather__value">  {this.props.wind_speed} m/s {this.props.wind_deg} º</span>
                    </p>
                }
                    {
                    this.props.pressure && <p className="weather__key">Pressure:
                        <span className="weather__value">  {this.props.pressure} hPa</span>
                    </p>
                }
            </div>
        )
    }
}

export default WeatherInfo;
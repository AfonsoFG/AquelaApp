import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

class WeatherInfo extends Component {

    render() {
        return (

                    <div className="weatherBackground clearfix mt20">
                        <div className="row">
                            <div className="col-md-6 weatherVisual">
                                {
                                    this.props.weather_icon &&
                                    <SVG src={this.props.weather_icon} className="weatherIcon" />
                                }
                            </div>
                            <div className="col-md-6 weatherInfo">
                            {
                                    this.props.description &&
                                    <p className="desc">{this.props.description}</p>
                                }
                                {
                                    this.props.temp && this.props.temp_min && this.props.temp_max &&
                                    <p>
                                        <span>{this.props.temp} ºC</span>
                                        <span className="badge badge-temp-min">{this.props.temp_min} ºC</span>
                                        <span className="badge badge-temp-max">{this.props.temp_max} ºC</span>
                                    </p>
                                }
                                {
                                    this.props.wind_speed && this.props.wind_deg &&
                                    <p><b>Wind</b> <span>{this.props.wind_speed} m/s @ {this.props.wind_deg} º</span></p>
                                }
                                {
                                    this.props.humidity &&
                                    <p><b>Humidity</b> <span>{this.props.humidity} %</span></p>
                                }
                                {
                                    this.props.pressure &&
                                    <p><b>Pressure</b> <span>{this.props.pressure} hPa</span></p>
                                }
                            </div>
                        </div>
                    </div>

        )
    }
}

export default WeatherInfo;
import React, { Component } from 'react';

class WeatherForecast extends Component {

    render() {
        return (

            <div className="weather-info mt20">
                {
                    this.props.forecast && <p className="weather__key">
                        <span className="weather__value">  {JSON.stringify(this.props.forecast)}</span>
                    </p>
                }
                
                
            </div>
        )
    }
}

export default WeatherForecast;
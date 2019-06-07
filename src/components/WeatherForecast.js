import React, { Component } from 'react';
import { WeatherForecastDay } from './../components/';
import moment from 'moment';

class WeatherForecast extends Component {

    groupWeatherByDay = (list) => {
        // Map() itera por ordem de inserção
        const days = new Map()

        list.forEach((w) => {
            const day = moment(w.dt * 1000).format("dddd Do MMMM")
            if (!days[day]) days[day] = []
            days[day].push(w)
        })

        return days;
    }

    printDays() {
        let forecast = this.props.forecast;

        const agrupado = this.groupWeatherByDay( forecast || [] );
        
        const days = Object.keys(agrupado).map( (day, index) => (
            <WeatherForecastDay key={day} today={index===0} day={day} dayData={agrupado[day]}/>
        ));

        return days;
    }

    render() {
        return (
            <div className="weather-info mt60">

                { this.props.forecast && this.printDays() }
            </div>
        )
    }
}

export default WeatherForecast;
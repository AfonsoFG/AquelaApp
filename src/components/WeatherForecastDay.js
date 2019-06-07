import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import moment from 'moment'
import WeatherIcons from '../assets/data/weather-icons.json'; 

class WeatherForecastDay extends Component {
    constructor(props) {
        super(props);

        let infoDay = props.dayData.map( (row) => {

            let time = `${moment(row.dt*1000).format("HH:mm")}`
            let prefix = 'wi-';
            let code = row.weather[0].id;
            let icon = WeatherIcons[code].icon;
    
            if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                icon = 'day-' + icon;
            }
    
            icon = './assets/img/icons-weather/' + prefix + icon + '.svg';

            let iconSvg = <SVG src={icon} className="weatherIcon" />;
            let iconName = row.weather[0].description
            iconName = iconName.charAt(0).toUpperCase() + iconName.slice(1)
            let temp = `${Math.round(row.main.temp)}°C`
            let windSpeed = `${row.wind.speed} km/h`
            let windDirection = `${Math.round(row.wind.deg)}°`

            return (
                <div key={time} className="row weatherDay">
                    <div className="col-sm-3 col-xs-3">{time}</div>
                    <div className="col-sm-1 col-xs-2">{iconSvg}</div>
                    <div className="col-sm-3 col-xs-4">{iconName}</div>
                    <div className="col-sm-2 col-xs-3">{temp}</div>
                    <div className="col-sm-3 hidden-xs">{windSpeed} @ {windDirection}</div>
                </div>
            )
        });

        this.state = {
            infoDay
        };
    }
    
    render() {
        return(
            <section className="forecastDayWeather">
                {this.props.today ?
                  <div>
                    <h4 className="day">Today</h4>
                  </div> :
                  <h4 className="day">{this.props.day}</h4> }
                { this.state.infoDay }
         
        </section>
        );  
    }
}

export default WeatherForecastDay;
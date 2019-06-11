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


const getWeather = async (cityId, WeatherIcons) => {

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`);

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

    return {
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
    }

}


export { apiKey, cities, getWeather }
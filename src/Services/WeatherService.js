import {DateTime} from "luxon";

export const API_KEY = '55a39bc0eea8442c77458cb6e4dcf5dd';
export const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const formatCurrentWeather = (data) => {
  const {
    coord: {lat, lon},
    main: {temp, feels_like, temp_min, temp_max, humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed}
  } = data
  const {main: details, icon} = weather[0]

  return {
    lat,
    lon,
    temp,
    temp_min,
    temp_max,
    feels_like,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed
  }
}

export const formateForcastWeather = (data) => {
  let {timezone, daily, hourly} = data
  daily = daily.slice(1, 6).map(d => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'ccc'),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    }
  })
  hourly = hourly.slice(1, 6).map(d => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
      temp: d.temp,
      icon: d.weather[0].icon
    }
  })
  return {timezone, daily, hourly}
}

export const formatToLocalTime = (sec, zone, format = "cccc dd LLL yyyy' | Local time: ' hh:mm a") => {
  return DateTime.fromSeconds(sec).setZone(zone).toFormat(format)
}
export const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

import './App.css'
import Header from "./Components/Header.jsx";
import SearchSection from "./Components/SearchSection.jsx";
import Forecast from "./Components/Forecast.jsx";
import TimeAndLocation from "./Components/TimeAndLocation.jsx";
import TemperatureAndDetails from "./Components/TemperatureAndDetails.jsx";
import {useEffect, useState} from "react";
import {
  API_KEY,
  BASE_URL,
  formatCurrentWeather,
  formateForcastWeather,
} from "./Services/WeatherService.js";
import axios from "axios";

function App() {
  const [query, setQuery] = useState('Dhaka')
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    let queryUrl;
    if (typeof query === 'string') {
      queryUrl = `q=${query}`
    } else if (typeof query === 'object') {
      queryUrl = `lat=${query.lat}&lon=${query.lon}`
    }
    try {
      const weatherData = await axios.get(`${BASE_URL}weather?${queryUrl}&units=${units}&appid=${API_KEY}`)
      const {lat, lon} = weatherData.data.coord
      const currentWeather = formatCurrentWeather(weatherData.data)
      const forcastData = await axios.get(`${BASE_URL}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=${units}&appid=${API_KEY}`)
      let forcastWeather = formateForcastWeather(forcastData.data)
      setWeather({
        ...currentWeather,
        ...forcastWeather
      })
      setLoading(false)
    } catch (err) {
      console.log(err.response)
      setError(err?.response?.data?.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [query, units])

  return (
    <div className={'container'} style={{backgroundColor: "#257F89"}}>
      <Header setQuery={setQuery}/>
      <SearchSection setQuery={setQuery} units={units} setUnits={setUnits}/>
      {
        loading ? 'Loading' :
          weather && (
            <>
              <TimeAndLocation dt={weather.dt} name={weather.name} country={weather.country}/>
              <TemperatureAndDetails weather={weather} units={units}/>
              <Forecast items={weather.hourly} title={'Hourly Forecast'}/>
              <Forecast items={weather.daily} title={'Daily Forecast'}/>
            </>
          )
      }
    </div>
  )
}

export default App

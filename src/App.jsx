import './App.css'
import Header from "./Components/Header.jsx";
import SearchSection from "./Components/SearchSection.jsx";
import Forecast from "./Components/Forecast.jsx";
import TimeAndLocation from "./Components/TimeAndLocation.jsx";
import TemperatureAndDetails from "./Components/TemperatureAndDetails.jsx";
import {useEffect, useState} from "react";
import {getFormateWeatherData,} from "./Services/WeatherService.js";

function App() {
// weather?q=Dhaka&units=metric&
  const [query, setQuery] = useState('Dhaka')
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  const fetchWeather = async () => {
    await getFormateWeatherData(`weather?q=${query}&units=${units}`)
      .then((data) => {
        setWeather(data)
      })
  }

  useEffect(() => {
    fetchWeather()
  }, [query, units])

  console.log(weather)

  return (
    <div className={'container'} style={{backgroundColor: "rgb(0, 151, 167)"}}>
      <Header/>
      <SearchSection/>
      {
        weather && (
          <>
            <TimeAndLocation dt={weather.dt} name={weather.name} country={weather.country}/>
            <TemperatureAndDetails weather={weather}/>
            <Forecast items={weather.hourly} title={'Hourly Forecast'}/>
            <Forecast items={weather.daily} title={'Daily Forecast'}/>
          </>
        )
      }
    </div>
  )
}

export default App

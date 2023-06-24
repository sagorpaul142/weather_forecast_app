import './App.css'
import Header from "./Components/Header.jsx";
import SearchSection from "./Components/SearchSection.jsx";
import Forecast from "./Components/Forecast.jsx";
import TimeAndLocation from "./Components/TimeAndLocation.jsx";
import TemperatureAndDetails from "./Components/TemperatureAndDetails.jsx";

function App() {

  return (
    <div className={'container'} style={{backgroundColor: "rgb(0, 151, 167)"}}>
      <Header/>
      <SearchSection/>
      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast title={'Hourly Forecast'}/>
      <Forecast title={'Daily Forecast'}/>
    </div>
  )
}

export default App

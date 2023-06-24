import {CiTempHigh} from "react-icons/ci";
import {TbSunHigh, TbWind} from "react-icons/tb";
import {WiHumidity} from "react-icons/wi";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import {formatToLocalTime, iconUrlFromCode} from "../Services/WeatherService.js";

const TemperatureAndDetails = ({weather, units}) => {
  const {details, icon, temp, feels_like, humidity, speed, sunrise, sunset, timezone, temp_max, temp_min} = weather
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center py-6 text-xl text-white">
        <p>{details}</p>
      </div>
      <div
        className="d-flex flex-row flex-wrap  align-items-center justify-content-between justify-content-lg-evenly text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className={'img-fluid'}/>
        <p className="text-5xl">
          {Math.round(temp)}
          <sup>°{units === 'metric' && 'C'}</sup>
        </p>
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex fw-lighter text-sm align-items-center justify-content-center">
            <CiTempHigh size={25} className={'mr-1'}/>
            Real fell:
            <span className={'fw-medium ms-1'}>
              {Math.round(feels_like)}°
            </span>
          </div>
          <div className="d-flex fw-lighter text-sm align-items-center justify-content-center">
            <WiHumidity size={25} className={'mr-1'}/>
            Humidity:
            <span className={'fw-medium ms-1'}>
              {humidity}%
            </span>
          </div>
          <div className="d-flex fw-lighter text-sm align-items-center justify-content-center">
            <TbWind size={25} className={'mr-1'}/>
            Wind Speed:
            <span className={'fw-medium ms-1'}> {speed} km/h</span>
          </div>
        </div>
      </div>

      <div className="d-flex flex-md-row flex-wrap align-items-center justify-content-center text-white text-sm py-3">
        <TbSunHigh size={20}/>
        <p className="fw-light space-x-2">
          Rise: <span className={'fw-medium ms-1'}>
          {formatToLocalTime(sunrise, timezone, "hh:mm a")}
        </span>
        </p>
        <p className={'fw-medium space-x-2'}>|</p>

        <TbSunHigh size={20} className="space-x-2"/>
        <p className="fw-light space-x-2">
          Set: <span className={'fw-medium ms-1'}>
          {formatToLocalTime(sunset, timezone, "hh:mm a")}
        </span>
        </p>
        <p className={'fw-medium space-x-2'}>|</p>

        <AiOutlineArrowUp size={20} className='space-x-2'/>
        <p className="medium space-x-2">
          High: <span className={'fw-medium ms-1'}>
          {Math.round(temp_max)}°
        </span>
        </p>
        <p className={'fw-medium space-x-2'}>|</p>

        <AiOutlineArrowDown size={20} className={'space-x-2'}/>
        <p className="fw-light space-x-2">
          Low: <span className={'fw-medium ms-1'}>
          {Math.round(temp_min)}°
        </span>
        </p>

      </div>

    </div>
  );
};

export default TemperatureAndDetails;

import {CiTempHigh} from "react-icons/ci";
import {TbSunHigh, TbWind} from "react-icons/tb";
import {WiHumidity} from "react-icons/wi";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center py-6 text-xl text-white">
        <p>Cloudy or whatever</p>
      </div>
      <div
        className="d-flex flex-row flex-wrap  align-items-center justify-content-sm-center justify-content-between justify-content-lg-evenly text-white py-3">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className={'img-fluid'}/>
        <p className="text-5xl">34</p>
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex fw-lighter text-sm align-items-center justify-content-center">
            <CiTempHigh size={25} className={'mr-1'}/>
            Real fell:
            <span className={'fw-medium ms-1'}> 32 </span>
          </div>
          <div className="d-flex fw-lighter text-sm align-items-center justify-content-center">
            <WiHumidity size={25} className={'mr-1'}/>
            Humidity:
            <span className={'fw-medium ms-1'}> 32 </span>
          </div>
          <div className="d-flex fw-lighter text-sm align-items-center justify-content-center">
            <TbWind size={25} className={'mr-1'}/>
            Wind Speed:
            <span className={'fw-medium ms-1'}> 32 </span>
          </div>
        </div>
      </div>

      <div className="d-flex flex-md-row flex-wrap align-items-center justify-content-center text-white text-sm py-3">
        <TbSunHigh size={20}/>
        <p className="fw-light space-x-2">
          Rise: <span className={'fw-medium ms-1'}>06:45 AM</span>
        </p>
        <p className={'fw-medium space-x-2'}>|</p>

        <TbSunHigh size={20} className="space-x-2"/>
        <p className="fw-light space-x-2">
          Set: <span className={'fw-medium ms-1'}>06:45 AM</span>
        </p>
        <p className={'fw-medium space-x-2'}>|</p>

        <AiOutlineArrowUp size={20} className='space-x-2'/>
        <p className="medium space-x-2">
          High: <span className={'fw-medium ms-1'}>06:45 AM</span>
        </p>
        <p className={'fw-medium space-x-2'}>|</p>

        <AiOutlineArrowDown size={20} className={'space-x-2'}/>
        <p className="fw-light space-x-2">
          Low: <span className={'fw-medium ms-1'}>06:45 AM</span>
        </p>

      </div>

    </div>
  );
};

export default TemperatureAndDetails;

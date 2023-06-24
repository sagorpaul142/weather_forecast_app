import {formatToLocalTime} from "../Services/WeatherService.js";
const TimeAndLocation = ({dt, name, country}) => {
  return (
    <div>
      <p className={'fs-5 lh-base text-light fw-light text-center'}>
        {formatToLocalTime(dt)}
      </p>
      <div className="d-flex justify-content-center align-items-center my-3 text-white">
        <p className={'fw-medium text-3xl'}>{name}, {country}</p>
      </div>
    </div>
  );
};
export default TimeAndLocation;

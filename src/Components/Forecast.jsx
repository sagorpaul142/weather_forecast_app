import {iconUrlFromCode} from "../Services/WeatherService.js";

const Forecast = ({title, items}) => {
  return (
    <div className='pb-2'>
      <div className="d-flex align-items-center justify-content-start mt-2">
        <p className='text-white fw-medium text-uppercase'>{title}</p>
      </div>
      <hr className='my-2 border-2'/>
      <div className="d-flex flex-wrap flex-row align-items-center justify-content-between text-white">

        {
          items.map((item) => (
            <div className="d-flex flex-column align-items-center justify-content-center" key={item.title}>
              <p className="fw-light text-sm">{item.title}</p>
              <img src={iconUrlFromCode(item.icon)} alt="" className={'w-100 my-1 img-fluid'}/>
              <p className="fw-medium">{Math.round(item.temp)}°</p>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Forecast;

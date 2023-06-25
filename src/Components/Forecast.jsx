import {iconUrlFromCode} from "../Services/WeatherService.js";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {options} from "../Helper.js";

const Forecast = ({title, items, daily}) => {
  return (
    <div className='pb-2'>
      <div className="d-flex align-items-center justify-content-start mt-2">
        <p className='text-white fw-medium text-uppercase'>{title}</p>
      </div>
      <hr style={{color: '#fff'}} className='my-2 border-2'/>
      <div className="d-flex flex-wrap flex-row align-items-center justify-content-between text-white">
        <OwlCarousel {...options}>
          {
            items?.map((item, index) => (
              <div className="d-flex flex-column align-items-center justify-content-center" key={index}>
                <p className="fw-light text-sm">{item.date}{daily && ','} {item.title}</p>
                <img src={iconUrlFromCode(item.icon)} alt="" className={'my-1 img-fluid'}/>
                <p className="fw-medium">{Math.round(item.temp)}°</p>
              </div>
            ))
          }
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Forecast;

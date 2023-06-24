const Forecast = ({title}) => {
  return (
    <div className='pb-2'>
      <div className="d-flex align-items-center justify-content-start mt-2">
        <p className='text-white fw-medium text-uppercase'>{title}</p>
      </div>
      <hr className='my-2 border-2'/>
      <div className="d-flex flex-wrap flex-row align-items-center justify-content-between text-white">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p className="fw-light text-sm">04:30 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className={'w-100 my-1 img-fluid'}/>
          <p className="fw-medium">22</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p className="fw-light text-sm">04:30 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className={'w-100 my-1 img-fluid'}/>
          <p className="fw-medium">22</p>
        </div>
         <div className="d-flex flex-column align-items-center justify-content-center">
          <p className="fw-light text-sm">04:30 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className={'w-100 my-1 img-fluid'}/>
          <p className="fw-medium">22</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p className="fw-light text-sm">04:30 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className={'w-100 my-1 img-fluid'}/>
          <p className="fw-medium">22</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p className="fw-light text-sm">04:30 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className={'w-100 my-1 img-fluid'}/>
          <p className="fw-medium">22</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;

import {MdLocationPin} from "react-icons/md";
import {CiSearch} from "react-icons/ci";

const SearchSection = () => {
  return (
    <div className={'w-100 d-flex'}>
      <div className="" style={{width: '15%'}}></div>
      <div style={{width: '70%'}} className={'py-3'}>
        <div className="row align-items-center">
          <div className="col-md-7 offset-1">
            <form className={'d-flex align-items-center'}>
              <input placeholder={'Search city'} className={'form-control shadow  me-3'}/>
              <CiSearch className={'icon'} size={25}/>
            </form>
          </div>
          <div className="col-md-1 d-flex justify-content-center">
            <MdLocationPin className={'icon'} size={25}/>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <div className="d-flex align-items-center">
              <button className={'celcius_ferenhit'}>°C</button>
              <p className={"line text-white"}>|</p>
              <button className={'celcius_ferenhit'}>°F</button>
            </div>
          </div>
          <div className="offset-1"></div>
        </div>
      </div>
      <div className="" style={{width: '15%'}}></div>
    </div>
  );
};

export default SearchSection;

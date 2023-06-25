import {MdLocationPin} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import {useState} from "react";
import {RxCross1} from "react-icons/rx";

const SearchSection = ({setQuery, setUnits, units}) => {
  const [city, setCity] = useState('')

  const handleSearchClick = (e) => {
    e.preventDefault()
    if (city) {
      setQuery(city)
    }
  }
  const clearInput = () => {
    setCity("")
    console.log(city)
  }
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({lat, lon})
      })
    }
  }
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) {
      setUnits(selectedUnit)
    }
  }
  return (
    <div className={'w-100 d-flex'}>
      <div className="" style={{width: '15%'}}></div>
      <div style={{width: '70%'}} className={'py-3'}>
        <div className="row  align-items-center">
          <div className="col-md-7 offset-1">
            <form onSubmit={handleSearchClick} className={'d-flex justify-content-between align-items-center'}>
              <div className="position-relative" style={{width: '86%'}}>
                <input
                  type={"text"}
                  placeholder={'Search city'}
                  className={'form-control shadow  me-3 '}
                  onChange={(e) => setCity(e.currentTarget.value)}
                  value={city}
                />
                {
                  city?.length > 0 &&
                  <RxCross1
                    className={'position-absolute clear_input cursor-pointer'}
                    size={20}
                    onClick={clearInput}
                  />
                }
              </div>


              <button
                type={"submit"}
                onClick={handleSearchClick}
                className='search_button'
              >
                <CiSearch
                  className={'icon'}
                  size={25}
                />
              </button>

            </form>
          </div>
          <div
            className="col-md-4 col-lg-3 d-flex justify-content-sm-center justify-content-lg-evenly align-items-center">
            <MdLocationPin onClick={handleLocation} className={'icon'} size={25}/>
            <div className="d-flex align-items-center">
              <button onClick={handleUnitsChange} name={'metric'} className={'celcius_ferenhit'}>°C</button>
              <p className={"line text-white"}>|</p>
              <button onClick={handleUnitsChange} name={'imperial'} className={'celcius_ferenhit'}>°F</button>
            </div>
          </div>
          <div className="offset-lg-1"></div>
        </div>
      </div>
      <div className="" style={{width: '15%'}}></div>
    </div>
  );
};

export default SearchSection;

import {MdLocationPin} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import {useState} from "react";

const SearchSection = ({setQuery, setUnits, units}) => {
  const [city, setCity] = useState('')

  const handleSearchClick = (e) => {
    e.preventDefault()
    if (city) {
      setQuery(city)
    }
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
    <div className={'py-3'}>
      <div className="row  align-items-center">
        <div className="col-md-2 d-sm-none d-md-block"></div>
        <div className="col-md-8 col-sm-12">
          <form onSubmit={handleSearchClick} className={'d-flex justify-content-between align-items-center'}>
            <div className="input-group">
              <input
                type="text"
                placeholder={'Search city'}
                className="form-control shadow"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => setCity(e.currentTarget.value)}
                value={city}
              />
              <div className="invalid-feedback"></div>
              <span
                className="input-group-text shadow cursor-pointer search_button"
                onClick={handleSearchClick}>
                  <CiSearch
                    size={25}
                  />
                </span>
            </div>

          </form>
        </div>
        <div className="col-md-2 d-sm-none d-md-block"></div>
      </div>
      <div className="row mt-3">
        <div className="col-md-2 d-sm-none d-md-block"></div>
        <div className="col-md-8 col-sm-12 d-flex justify-content-center align-items-center">
          <MdLocationPin onClick={handleLocation} className={'icon'} size={25}/>
          <div className="d-flex align-items-center">
            <button onClick={handleUnitsChange} name={'metric'} className={'celcius_ferenhit'}>°C</button>
            <p className={"line text-white"}>|</p>
            <button onClick={handleUnitsChange} name={'imperial'} className={'celcius_ferenhit'}>°F</button>
          </div>
        </div>
        <div className="col-md-4 d-sm-none d-md-block"></div>
      </div>

    </div>
  );
};

export default SearchSection;

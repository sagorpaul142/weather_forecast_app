import {CiTempHigh} from "react-icons/ci";
import {WiHumidity} from "react-icons/wi";
import {TbSunHigh} from "react-icons/tb";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import Skeleton from "react-loading-skeleton";

const TemperatureAndDetailsSkeleton = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center py-6 text-xl text-white">
        <p><Skeleton duration={1} height={30} width={300}/></p>
      </div>
      <div
        className="d-flex flex-row flex-wrap  align-items-center justify-content-between justify-content-lg-evenly text-white py-3">
        <Skeleton height={100} width={100}/>
        <p className="text-5xl">
          <Skeleton duration={1} height={50} width={90}/>
        </p>
        <div className="d-flex flex-column align-items-start">
          <Skeleton duration={1} height={75} width={170}/>
        </div>
      </div>

      <div className="d-flex flex-md-row flex-wrap align-items-center justify-content-center text-white text-sm py-3">
        <Skeleton duration={1} height={52} width={480}/>
      </div>

    </div>
  );
};

export default TemperatureAndDetailsSkeleton;

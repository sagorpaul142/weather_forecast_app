import Skeleton from "react-loading-skeleton";

const TimeAndLocationSkeleton = () => {
  return (
    <div>
      <p className={'fs-5 lh-base text-light fw-light text-center'}>
        <Skeleton duration={1} height={30} width={'100%'}/>
      </p>
      <div className="d-flex justify-content-center align-items-center my-3 text-white">
        <Skeleton duration={1} height={30} width={'100%'}/>
      </div>

    </div>
  );
};

export default TimeAndLocationSkeleton;

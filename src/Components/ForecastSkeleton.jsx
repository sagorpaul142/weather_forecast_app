import Skeleton from "react-loading-skeleton";

const ForecastSkeleton = () => {
  return (
    <div>
      <Skeleton duration={3} height={150} width={'100%'}/>
    </div>
  );
};

export default ForecastSkeleton;

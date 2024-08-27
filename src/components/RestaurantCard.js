import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-card-img" src={CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;

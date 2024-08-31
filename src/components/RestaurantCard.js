import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-card-img" src={CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h5 style={{ fontWeight: 100 }}>{cuisines.join(", ")}</h5>
      <h5 style={{ fontWeight: 600 }}>{avgRating} stars</h5>
      <h5 style={{ fontWeight: 100 }}>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;

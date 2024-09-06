import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className=" m-1 p-1 w-[190px] transition-transform duration-[0.2s] h-96 bg-[#f0f0f0] text-black rounded-[20px] hover:cursor-pointer ">
      <img
        className="w-full h-[170px] rounded-[20px]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-bold my-1">{name}</h4>
      <h5 className="font-extralight">{cuisines.join(", ")}</h5>
      <h5 className="font-semibold my-2">{avgRating} stars</h5>
      <h5 className="font-normal">{costForTwo}</h5>
    </div>
  );
};

//Higher order component - it takes RestaurantCard as input and return RestaurantCard with VegOnly label
export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute z-10 p-1 m-2 rounded-lg bg-amber-400 text-sky-950 ">
          *Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

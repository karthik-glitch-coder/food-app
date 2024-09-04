import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //custom hook for get res Menu
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h2 className="res-name">{name}</h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>

      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            <h6>
              {item.card?.info?.name} - ₹{item.card?.info?.price / 100}
            </h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

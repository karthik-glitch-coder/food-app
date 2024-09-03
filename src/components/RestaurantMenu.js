import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3></h3>

      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            <h5>
              {item.card?.info?.name} - ₹{item.card?.info?.price / 100}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

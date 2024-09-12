import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST_API, RES_LIST_API_MDU } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API_MDU);
    const json = await data.json();
    //console.log(json);
    //for API data checking
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h3 className="mt-52 text-center text-cyan-800 shadow-md text-xl">
        Unable to connect right now. Please ensure your device is online and try
        again.
      </h3>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="font-roboto pt-[110px]">
      <div className="flex justify-between m-5">
        <div className="p-3 ">
          <input
            type="text"
            data-testid="searchInput"
            className="p-1 m-2 border border-solid border-gray-600 rounded-lg focus:bg-green-50"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="type here..."
          ></input>
          <button
            onClick={() => {
              const filterdRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filterdRestaurants);
            }}
            className=" p-1 m-1 px-2 py-0.5 bg-purple-200 hover:bg-purple-300 rounded-lg"
          >
            Search
          </button>
        </div>
        <div className=" m-2 px-2 py-3">
          <button
            data-testid="topRatedBtn"
            className="ml-1 m-1 px-4 py-0.5 cursor-pointer bg-green-200 hover:bg-green-300 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants {">"} 4.3
          </button>
        </div>
        <div className="">
          <div className="  px-2 py-3 ">
            <label className=" m-1 px-2 py-1 bg-purple-200  rounded-lg">
              UserName :{" "}
            </label>
            <input
              type="text"
              className="p-1 m-2 border border-solid border-gray-600 rounded-lg focus:bg-green-50"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-1 pb-5">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            style={{ textDecoration: "none" }}
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

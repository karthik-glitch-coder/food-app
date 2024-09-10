import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);
  return (
    <div>
      <div className="w-6/12 p-3 my-4 mx-auto shadow-lg select-none  bg-gray-50">
        <div
          className="flex justify-between select-none cursor-pointer"
          onClick={() => {
            setShowIndex();
          }}
        >
          <span className="font-semibold ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⏬</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;

import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="m-2 p-2 text-left border-gray-200 border-b-2 flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price / 100}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute font-bold text-green-700">
                <button className="p-1 m-0.5 rounded-md bg-white text-gray shadow-lg hover:bg-gray-200">
                  ADD
                </button>
              </div>
              {/* logic for Items without Images(have next available message) */}
              {item.card.info.imageId ? (
                <img
                  className="w-full rounded-md"
                  src={CDN_URL + item.card.info.imageId}
                />
              ) : (
                <p className="m-2 mt-6 p-1 border border-gray-100">
                  {item.card.info.nextAvailableAtMessage}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;

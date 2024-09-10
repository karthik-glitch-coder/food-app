import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  const handleClearItem = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" pt-[130px]">
      <div className="text-center m-4 p-4 flex  justify-between">
        {cartItems.length === 0 ? (
          <h1 className="text-2xl font-semibold">Cart Items</h1>
        ) : (
          <h1 className="text-2xl font-semibold">
            Cart Items - [{cartItems.length}]
          </h1>
        )}

        <button
          onClick={handleClearItem}
          className="ml-1 m-1 px-4 py-0.5 cursor-pointer bg-green-200 hover:bg-green-300 rounded-lg"
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center font-thin text-2xl mt-28 p-4">
          <h1>Cart is empty now, Please add your items!</h1>
        </div>
      ) : (
        <div className="w-1/2 m-auto text-center bg-gray-50 border border-gray-100">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;

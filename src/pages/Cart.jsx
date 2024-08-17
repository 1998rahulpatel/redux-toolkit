import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold mb-6">Cart</h3>
      <div className="flex flex-col space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md items-center space-x-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-md"
            />
            <p className="text-lg font-semibold mb-1">{item.title}</p>
                <p className="text-gray-700 mb-2">${item.price}</p>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 w-40 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

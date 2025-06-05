import React from "react";
import { useCart } from "../../contexts/cartContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useCart();

  const handleRemove = (trackId) => {
    removeFromCart(trackId);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    updateCartQuantity(id, newQuantity);
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 py-8">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <a 
            href="/store" 
            className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-200 py-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.artist}</p>
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                      className="px-3 py-1 bg-gray-200 rounded-l"
                      disabled={(item.quantity || 1) <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">
                      {item.quantity || 1}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                      className="px-3 py-1 bg-gray-200 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 flex items-center justify-end mt-2"
                  >
                    <FaTrash className="mr-1" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal ({cart.reduce((total, item) => total + (item.quantity || 1), 0)} items)</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
              Proceed to Checkout
            </button>
            <a 
              href="/store" 
              className="mt-4 inline-block w-full text-center text-black border border-black py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
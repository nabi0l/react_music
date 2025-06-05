// src/pages/CheckoutPage.js
import React from "react";
import { useMusicPlayer } from "../contexts/MusicPlayerContext";

const CheckoutPage = () => {
  const { cart, clearCart } = useMusicPlayer();

  const handleCheckout = async () => {
    // Process payment (integration with Stripe, PayPal, etc.)
    // On success:
    clearCart();
    // Redirect to success page
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Payment Details</h2>
          {/* Payment form would go here */}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between py-2 border-b border-gray-200"
            >
              <span>{item.title}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold mt-4">
            <span>Total</span>
            <span>
              ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-3 rounded-lg mt-6 hover:bg-green-700 transition-colors"
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

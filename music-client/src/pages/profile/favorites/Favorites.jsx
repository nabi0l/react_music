import React from 'react';
import { useCart } from '../../../contexts/cartContext';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FavoritesPage = () => {
  const { favorites, toggleFavorite, addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <FaRegHeart className="mx-auto text-5xl text-gray-300 mb-4" />
          <p className="text-xl text-gray-600">You don't have any favorites yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map(item => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold truncate">{item.title}</h3>
                <p className="text-gray-600 text-sm truncate mb-2">{item.artist}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">${item.price}</span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => addToCart(item.id)}
                      className="text-gray-700 hover:text-black"
                    >
                      <FaShoppingCart />
                    </button>
                    <button 
                      onClick={() => toggleFavorite(item.id, true)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
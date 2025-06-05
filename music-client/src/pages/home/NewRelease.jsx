import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCart } from "../../contexts/cartContext";
import { fetchMusicData } from "../../services/api";

const NewRelease = () => {
  const [activeTab, setActiveTab] = useState("singles");
  const [isLoading, setIsLoading] = useState(true);
  const [musicData, setMusicData] = useState({ singles: [], albums: [] });
  const { cart, favorites, addToCart, toggleFavorite } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMusicData();

        // Transform data to match your needs
        const transformItem = (item) => ({
          id: item.id,
          title: item.title,
          artist: item.artist,
          image: item.image_url || "default.jpg",
          type: item.type === "single" ? "Single" : "Album",
          date: new Date(item.release_date).toLocaleDateString(),
          price: item.price || 0.99,
          isNew: Boolean(item.is_new),
          isFavorite: favorites.some((fav) => fav.id === item.id),
        });

        setMusicData({
          singles: data.singles?.map(transformItem) || [],
          albums: data.albums?.map(transformItem) || [],
        });
      } catch (error) {
        console.error("Failed to fetch music data:", error);
        setMusicData({ singles: [], albums: [] });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [favorites]);

  const MusicGridItem = ({ item }) => {
    return (
      <motion.div
        className="relative bg-white rounded-xl shadow-md overflow-hidden flex-col h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Type Badge */}
        <span
          className={`absolute top-3 left-3 z-10 px-2 py-1 rounded-full text-xs font-bold ${
            item.type === "Single"
              ? "bg-gray-800 text-white"
              : "bg-black text-white"
          }`}
        >
          {item.type}
        </span>

        {/* Cover Art */}
        <div className="relative aspect-square">
          <img
            src={item.image}
            alt={`${item.title} - ${item.artist}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/default.jpg";
            }}
          />
        </div>

        {/* Info Section */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="mb-2">
            <h3 className="font-bold text-lg truncate">{item.title}</h3>
            <p className="text-gray-600 text-sm truncate">{item.artist}</p>
          </div>

          <div className="mt-auto pt-2 border-t border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-gray-500">{item.date}</span>
              <span className="font-bold text-black">
                ${item.price.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between gap-2">
              <button
                onClick={() => addToCart(item)}
                className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaShoppingCart className="mr-2" size={14} />
                <span className="text-xs">Cart</span>
              </button>
              <button
                onClick={() => toggleFavorite(item.id, item.isFavorite)}
                className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                {item.isFavorite ? (
                  <FaHeart className="mr-2 text-red-500" size={14} />
                ) : (
                  <FaRegHeart className="mr-2" size={14} />
                )}
                <span className="text-xs">Wish</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">
            Latest Singles and Albums
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            From new voices to seasoned artists - hear what's new.
          </p>
        </div>

        <div className="flex space-x-2 bg-gray-100 p-1 rounded-full">
          <button
            onClick={() => setActiveTab("singles")}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === "singles" ? "bg-black text-white" : "text-gray-700"
            }`}
          >
            Singles
          </button>
          <button
            onClick={() => setActiveTab("albums")}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === "albums" ? "bg-black text-white" : "text-gray-700"
            }`}
          >
            Albums
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
        </div>
      ) : (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {musicData[activeTab].map((item) => (
            <MusicGridItem key={item.id} item={item} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NewRelease;

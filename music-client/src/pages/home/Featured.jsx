import React, { useState } from "react";
import { FaPlay, FaPause, FaShoppingCart, FaMusic } from "react-icons/fa";

import item from "../../assets/images/home/newRelease/blinded.jpeg";
import item1 from "../../assets/images/home/newRelease/thankfull and blessed.jpeg";
import item2 from "../../assets/images/home/newRelease/still waters.jpeg";
import item3 from "../../assets/images/home/newRelease/child of god.jpeg";
import item4 from "../../assets/images/home/newRelease/TobyMac_Heaven_On_My_Mind.jpg";
const FeaturedMusic = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const featuredItems = [
    {
      id: 1,
      title: "Blinded",
      artist: "Ryan Stevenson",
      coverArt: item,
      duration: "0:30",
      price: "$1.29",
      type: "Single",
    },
    {
      id: 2,
      title: "Thankful And Blessed",
      artist: "Joe Mullins",
      coverArt: item1,
      duration: "0:30",
      price: "$9.99",
      type: "Album",
    },
    {
      id: 3,
      title: "Still Waters",
      artist: "Leanna Crawford",
      coverArt: item2,
      duration: "0:30",
      price: "$1.29",
      type: "Single",
    },
    {
      id: 4,
      title: "Child of God",
      artist: "Forrest Frank",
      coverArt: item3,
      duration: "0:30",
      price: "$1.29",
      type: "Single",
    },
    {
      id: 5,
      title: "Heaven On My Mind",
      artist: "TobyMac",
      coverArt: item4,
      duration: "0:30",
      price: "$12.99",
      type: "Album",
    },
  ];

  const togglePlay = (id) => {
    setCurrentPlaying(currentPlaying === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-justify">
        <h2 className="text-3xl font-bold text-black mb-2">Featured Music</h2>
        <p className="text-gray-600">Preview our latest singles and albums</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
              currentPlaying === item.id ? "ring-2 ring-black glow-effect" : ""
            }`}
          >
            {/* Cover Art */}
            <div className="relative">
              <img
                src={item.coverArt}
                alt={`${item.title} - ${item.artist}`}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                {item.type}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg truncate">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.artist}</p>

              {/* Audio Player */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <button
                    onClick={() => togglePlay(item.id)}
                    className="bg-gray-100 text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {currentPlaying === item.id ? <FaPause /> : <FaPlay />}
                  </button>
                  <span className="text-xs text-gray-500">{item.duration}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-black h-1 rounded-full"
                    style={{ width: currentPlaying === item.id ? "70%" : "0%" }}
                  ></div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-1">
                  <FaMusic size={12} />
                  Full Song
                </button>
                <button className="flex-1 bg-white border border-black text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                  <FaShoppingCart size={12} />
                  {item.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="text-black font-medium hover:underline">
          View All Featured Music →
        </button>
      </div>
    </div>
  );
};

// Add CSS class for glow effect
const glowEffect = {
  boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)'
};

export default FeaturedMusic;

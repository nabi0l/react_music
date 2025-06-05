import React from "react";
import {
  FaPlay,
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

import grave from '../../../assets/images/albums/grave.jpg';
import jireh from '../../../assets/images/albums/jireh.jpg';
import tooGood from "../../../assets/images/albums/too good.jpg";
import promises from "../../../assets/images/albums/promise.jpg";
const TrendingSongs = () => {
  // Trending songs data with social media tags
  const trendingSongs = [
    {
      id: 1,
      title: "Graves Into Gardens",
      artist: "Elevation Worship",
      cover: grave,
      duration: "5:56",
      price: 1.29,
      trendingOn: [
        { platform: "tiktok", hashtag: "#WorshipTok", views: "2.4M" },
        { platform: "instagram", hashtag: "#SundayVibes", reels: "1.1M" },
      ],
      isLiked: false,
    },
    {
      id: 2,
      title: "Jireh",
      artist: "Maverick City Music",
      cover: jireh,
      duration: "4:12",
      price: 1.49,
      trendingOn: [{ platform: "tiktok", hashtag: "#FaithFyp", views: "3.7M" }],
      isLiked: true,
    },
    {
      id: 3,
      title: "Too Good To Not Believe",
      artist: "Bethel Music",
      cover: tooGood,
      duration: "6:23",
      price: 1.39,
      trendingOn: [
        { platform: "instagram", hashtag: "#PraiseBreak", reels: "850K" },
        { platform: "tiktok", hashtag: "#ChristianTok", views: "1.9M" },
      ],
      isLiked: false,
    },
    {
      id: 4,
      title: "Promises",
      artist: "Maverick City Music",
      cover: promises,
      duration: "4:38",
      price: 1.19,
      trendingOn: [
        { platform: "tiktok", hashtag: "#BibleInSong", views: "5.2M" },
      ],
      isLiked: false,
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Trending Worship Songs
          </h2>
          <p className="text-lg text-gray-600">
            Viral Christian music making waves on social media
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingSongs.map((song) => (
            <div
              key={song.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Cover with play button */}
              <div className="relative">
                <img
                  src={song.cover}
                  alt={`${song.title} cover`}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-black bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition">
                  <FaPlay className="ml-1" />
                </button>
              </div>

              {/* Song info */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{song.title}</h3>
                    <p className="text-gray-600">{song.artist}</p>
                  </div>
                  <button
                    className={`p-2 ${
                      song.isLiked
                        ? "text-red-500"
                        : "text-gray-400 hover:text-red-500"
                    }`}
                  >
                    {song.isLiked ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>

                {/* Social media tags */}
                <div className="mt-3 space-y-2">
                  {song.trendingOn.map((platform, index) => (
                    <div key={index} className="flex items-center text-xs">
                      <span
                        className={`inline-flex items-center justify-center w-5 h-5 rounded mr-2 ${
                          platform.platform === "tiktok"
                            ? "bg-black text-white"
                            : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        }`}
                      >
                        {platform.platform === "tiktok" ? (
                          <FaTiktok size={10} />
                        ) : (
                          <FaInstagram size={10} />
                        )}
                      </span>
                      <span className="font-medium mr-1">
                        {platform.platform === "tiktok"
                          ? `${platform.views} views`
                          : `${platform.reels} reels`}
                      </span>
                      <span className="text-gray-500">
                        • {platform.hashtag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold">${song.price}</span>
                  <button className="flex items-center space-x-1 bg-black text-white px-3 py-1 rounded-full text-sm hover:bg-gray-800 transition">
                    <FaShoppingCart size={12} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors">
            View All Trending Songs
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingSongs;

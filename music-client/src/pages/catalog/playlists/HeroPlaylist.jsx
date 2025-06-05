import React from "react";
import { FaPlay, FaRandom, FaHeart, FaEllipsisH } from "react-icons/fa";

const HeroPlaylist = () => {
  // Sample playlist data (replace with your actual data)
  const playlistData = {
    title: "Morning Worship Mix",
    creator: "Grace Community Church",
    description:
      "Start your day with these uplifting worship songs. Perfect for personal devotion or small group gatherings.",
    coverImage: "https://example.com/playlist-cover.jpg",
    songCount: 24,
    totalDuration: "1hr 42min",
    followers: 12500,
    isLiked: false,
  };

  return (
    <div className="relative bg-black text-white min-h-[60vh] flex items-end pb-12">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${playlistData.coverImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end gap-8">
          {/* Playlist Cover */}
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 shadow-2xl transform transition-transform hover:scale-105">
            <img
              src={playlistData.coverImage}
              alt={playlistData.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Playlist Info */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="text-sm font-medium uppercase tracking-wider">
                Playlist
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                {playlistData.title}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                {playlistData.description}
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-6">
              <span>{playlistData.creator}</span>
              <span>•</span>
              <span>{playlistData.songCount} songs</span>
              <span>•</span>
              <span>{playlistData.totalDuration}</span>
              <span>•</span>
              <span>{playlistData.followers.toLocaleString()} followers</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                <FaPlay className="mr-2" />
                Play
              </button>
              <button className="flex items-center border border-gray-400 hover:border-white text-white px-6 py-3 rounded-full font-medium transition-colors">
                <FaRandom className="mr-2" />
                Shuffle
              </button>
              <button
                className={`flex items-center ${
                  playlistData.isLiked
                    ? "text-red-500"
                    : "text-gray-400 hover:text-white"
                } px-4 py-3 rounded-full transition-colors`}
              >
                <FaHeart className="mr-2" />
                {playlistData.isLiked ? "Liked" : "Like"}
              </button>
              <button className="flex items-center text-gray-400 hover:text-white px-4 py-3 rounded-full transition-colors">
                <FaEllipsisH />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPlaylist;

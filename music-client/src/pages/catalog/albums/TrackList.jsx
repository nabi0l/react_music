import React, { useState } from "react";
import {
  FaPlay,
  FaPause,
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
  FaMusic,
} from "react-icons/fa";
import { MdLyrics } from "react-icons/md";

const TrackList = () => {
  const [playingId, setPlayingId] = useState(null);
  const [expandedTrack, setExpandedTrack] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  // Sample data for Christian music tracks
  const tracks = [
    {
      id: 1,
      title: "Amazing Grace",
      duration: "4:15",
      price: 1.29,
      lyrics:
        "Amazing grace, how sweet the sound\nThat saved a wretch like me\nI once was lost, but now am found\nWas blind, but now I see",
      album: "Hymns of Faith",
      artist: "Various Artists",
      popularity: 95,
    },
    {
      id: 2,
      title: "What a Beautiful Name",
      duration: "3:45",
      price: 1.49,
      lyrics:
        "You were the Word at the beginning\nOne with God the Lord Most High\nYour hidden glory in creation\nNow revealed in You our Christ",
      album: "Let There Be Light",
      artist: "Hillsong Worship",
      popularity: 88,
    },
    {
      id: 3,
      title: "Reckless Love",
      duration: "5:18",
      price: 1.39,
      lyrics:
        "Before I spoke a word, You were singing over me\nYou have been so, so good to me\nBefore I took a breath, You breathed Your life in me\nYou have been so, so kind to me",
      album: "Reckless Love",
      artist: "Cory Asbury",
      popularity: 82,
    },
    {
      id: 4,
      title: "10,000 Reasons (Bless the Lord)",
      duration: "4:12",
      price: 1.19,
      lyrics:
        "Bless the Lord, O my soul\nO my soul\nWorship His holy name\nSing like never before\nO my soul\nI'll worship Your holy name",
      album: "10,000 Reasons",
      artist: "Matt Redman",
      popularity: 78,
    },
    {
      id: 5,
      title: "Oceans (Where Feet May Fail)",
      duration: "6:23",
      price: 1.59,
      lyrics:
        "You call me out upon the waters\nThe great unknown where feet may fail\nAnd there I find You in the mystery\nIn oceans deep my faith will stand",
      album: "Zion",
      artist: "Hillsong UNITED",
      popularity: 91,
    },
    {
      id: 6,
      title: "Good Good Father",
      duration: "3:52",
      price: 1.29,
      lyrics:
        "Oh, I've heard a thousand stories\nOf what they think You're like\nBut I've heard the tender whisper\nOf love in the dead of night",
      album: "The Very Next Thing",
      artist: "Chris Tomlin",
      popularity: 85,
    },
  ];

  const toggleWishlist = (id) => {
    setWishlist(
      wishlist.includes(id)
        ? wishlist.filter((trackId) => trackId !== id)
        : [...wishlist, id]
    );
  };

  const calculateTotalDuration = () => {
    const totalSeconds = tracks.reduce((acc, track) => {
      const [minutes, seconds] = track.duration.split(":").map(Number);
      return acc + minutes * 60 + seconds;
    }, 0);
    return `${Math.floor(totalSeconds / 60)}:${String(
      totalSeconds % 60
    ).padStart(2, "0")}`;
  };

  return (
    <div className="container mx-auto my-8 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-black p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-lg bg-gray-900 flex items-center justify-center shadow-md">
            <FaMusic className="text-2xl text-gray-300" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Christian Worship Collection</h2>
            <p className="text-gray-300 text-sm">
              Various Artists • {tracks.length} tracks •{" "}
              {calculateTotalDuration()}
            </p>
          </div>
        </div>
      </div>

      {/* Column Headers (Desktop only) */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
        <div className="col-span-2">Track</div>
        <div className="col-span-5">Title</div>
        <div className="col-span-2">Album</div>
        <div className="col-span-1 text-right">Time</div>
        <div className="col-span-2 text-right">Price</div>
      </div>

      {/* Track List */}
      <div className="divide-y divide-gray-200">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`p-4 hover:bg-gray-50 transition-colors duration-200 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div className="grid grid-cols-12 items-center gap-4 w-full">
              {/* Track Number + Play Button (2 cols) */}
              <div className="col-span-2 flex items-center space-x-3">
                <span className="text-gray-400 w-6 text-right hidden sm:inline-block">
                  {index + 1}.
                </span>
                <button
                  onClick={() =>
                    setPlayingId(playingId === track.id ? null : track.id)
                  }
                  className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center 
                    ${
                      playingId === track.id
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  aria-label={
                    playingId === track.id ? "Pause track" : "Play track"
                  }
                >
                  {playingId === track.id ? (
                    <FaPause />
                  ) : (
                    <FaPlay className="ml-1" />
                  )}
                </button>
              </div>

              {/* Title + Artist (5 cols) */}
              <div className="col-span-5 min-w-0">
                <p className="font-medium text-gray-900 truncate">
                  {track.title}
                </p>
                <p className="text-xs text-gray-500 truncate">{track.artist}</p>
                {/* Mobile only album */}
                <p className="text-xs text-gray-400 truncate md:hidden mt-1">
                  {track.album}
                </p>
              </div>

              {/* Album (3 cols - hidden on mobile) */}
              <div className="col-span-2 hidden md:block">
                <p className="text-xs text-gray-500 truncate">{track.album}</p>
              </div>

              {/* Duration (1 col) */}
              <div className="col-span-1 text-right text-xs text-gray-500">
                {track.duration}
              </div>

              {/* Actions (1 col) */}
              <div className="col-span-1 flex justify-end space-x-2">
                <button
                  onClick={() => toggleWishlist(track.id)}
                  className={`p-1 ${
                    wishlist.includes(track.id)
                      ? "text-red-500"
                      : "text-gray-400 hover:text-red-500"
                  }`}
                  aria-label={
                    wishlist.includes(track.id)
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                >
                  {wishlist.includes(track.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
                <button
                  className="px-2 py-1 bg-black text-white text-xs rounded hover:bg-gray-800 transition-colors"
                  aria-label={`Buy ${track.title} for $${track.price}`}
                >
                  ${track.price}
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedTrack === track.id && (
              <div className="mt-3 pl-16 pr-4">
                <div className="border-t border-gray-200 pt-3">
                  {/* Lyrics Section */}
                  {track.lyrics && (
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xs font-semibold text-gray-500">
                          LYRICS
                        </h4>
                      </div>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {track.lyrics}
                      </p>
                    </div>
                  )}

                  {/* Download Options */}
                  <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                    <button className="border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
                      MP3
                    </button>
                    <button className="border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
                      FLAC
                    </button>
                    <button className="border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
                      WAV
                    </button>
                  </div>

                  {/* Popularity Indicator */}
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-1 mr-2">
                      <div
                        className="bg-black h-1 rounded-full"
                        style={{ width: `${track.popularity}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {track.popularity}%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Player Controls (when playing) */}
            {playingId === track.id && (
              <div className="mt-2 pl-16 flex items-center space-x-4">
                <input
                  type="range"
                  className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: "black" }}
                />
                <span className="text-xs text-gray-500">
                  1:30 / {track.duration}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="text-sm text-gray-500">
            <p>
              {tracks.length} tracks • {calculateTotalDuration()}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Total: $
              {tracks.reduce((sum, track) => sum + track.price, 0).toFixed(2)}
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="px-3 py-1 border border-black text-black rounded-full text-sm hover:bg-gray-100 transition">
              Save as Playlist
            </button>
            <button
              className="px-4 py-2 bg-black text-white rounded-full text-sm flex items-center space-x-2 hover:bg-gray-800 transition"
              aria-label="Add all tracks to cart"
            >
              <FaShoppingCart />
              <span>
                Add All ($
                {tracks.reduce((sum, track) => sum + track.price, 0).toFixed(2)}
                )
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackList;

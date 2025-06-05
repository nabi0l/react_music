import React, { useState } from "react";
import {
  FaShare,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLink,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const ShareablePlaylist = ({ playlist }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Sample playlist data (replace with props)
  const playlistData = playlist || {
    id: "p123",
    title: "Morning Devotion Worship",
    url: "https://yourdomain.com/playlist/p123",
    description: "Start your day with these uplifting worship songs",
  };

  const shareOptions = [
    { platform: "Facebook", icon: <FaFacebook />, color: "bg-blue-600" },
    { platform: "Twitter", icon: <FaTwitter />, color: "bg-blue-400" },
    { platform: "WhatsApp", icon: <FaWhatsapp />, color: "bg-green-500" },
    {
      platform: "Instagram",
      icon: <FaInstagram />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    { platform: "Email", icon: <FaEnvelope />, color: "bg-gray-600" },
    { platform: "Copy Link", icon: <FaLink />, color: "bg-black" },
  ];

  const handleShare = (platform) => {
    if (platform === "Copy Link") {
      navigator.clipboard.writeText(playlistData.url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      return;
    }

    // Implement actual sharing functionality for each platform
    console.log(`Sharing to ${platform}: ${playlistData.url}`);
  };

  return (
    <div className="relative">
      {/* Main Share Button */}
      <button
        onClick={() => setIsShareOpen(!isShareOpen)}
        className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
      >
        <FaShare />
        <span>Share Playlist</span>
      </button>

      {/* Share Dropdown */}
      {isShareOpen && (
        <div className="absolute z-10 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 right-0">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-medium text-gray-900">
              Share "{playlistData.title}"
            </h3>
            <button
              onClick={() => setIsShareOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              {playlistData.description}
            </p>

            <div className="grid grid-cols-3 gap-3">
              {shareOptions.map((option) => (
                <button
                  key={option.platform}
                  onClick={() => handleShare(option.platform)}
                  className={`flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                    option.platform === "Copy Link" && isCopied
                      ? "bg-green-100"
                      : ""
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-10 h-10 ${option.color} text-white rounded-full mb-2`}
                  >
                    {option.icon}
                  </span>
                  <span className="text-xs font-medium">
                    {option.platform === "Copy Link" && isCopied
                      ? "Copied!"
                      : option.platform}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Example usage:
const PlaylistPage = () => {
  return (
    <div className="p-8">
      <ShareablePlaylist
        playlist={{
          id: "p456",
          title: "Evening Worship Mix",
          url: "https://yourdomain.com/playlist/p456",
          description: "Wind down your day with these peaceful worship songs",
        }}
      />
    </div>
  );
};

export default ShareablePlaylist;

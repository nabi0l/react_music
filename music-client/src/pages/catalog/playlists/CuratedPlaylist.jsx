import React from "react";
import { FaPlay, FaHeart, FaRegHeart, FaEllipsisH } from "react-icons/fa";

const CuratedPlaylists = () => {
  // Sample curated playlists data
  const playlists = [
    {
      id: 1,
      title: "Sunday Morning Worship",
      curator: "Grace Collective",
      description:
        "Elevate your Sunday service with these powerful worship anthems",
      coverImage: "https://example.com/sunday-worship.jpg",
      songCount: 18,
      duration: "1hr 25min",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Quiet Time Instrumentals",
      curator: "Prayerful Sounds",
      description: "Soaking worship for personal devotion and meditation",
      coverImage: "https://example.com/instrumentals.jpg",
      songCount: 12,
      duration: "59min",
      isFeatured: false,
    },
    {
      id: 3,
      title: "Modern Hymns Collection",
      curator: "Ancient Future Worship",
      description: "Timeless truths in contemporary arrangements",
      coverImage: "https://example.com/modern-hymns.jpg",
      songCount: 15,
      duration: "1hr 10min",
      isFeatured: true,
    },
    {
      id: 4,
      title: "Youth Group Praise",
      curator: "Next Gen Worship",
      description: "High-energy songs perfect for youth ministries",
      coverImage: "https://example.com/youth-praise.jpg",
      songCount: 20,
      duration: "1hr 35min",
      isFeatured: false,
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Curated Worship Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Handpicked playlists for every spiritual season and gathering
          </p>
        </div>

        {/* Playlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className={`bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all ${
                playlist.isFeatured
                  ? "border-2 border-black"
                  : "border border-gray-200"
              }`}
            >
              {/* Playlist Cover */}
              <div className="relative">
                <img
                  src={playlist.coverImage}
                  alt={playlist.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-black bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition">
                  <FaPlay className="ml-1" />
                </button>
                {playlist.isFeatured && (
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold tracking-wider">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Playlist Info */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{playlist.title}</h3>
                    <p className="text-sm text-gray-600">{playlist.curator}</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    {playlist.isFeatured ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>

                <p className="text-sm text-gray-700 mb-4">
                  {playlist.description}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-gray-200 pt-4">
                  <span>
                    {playlist.songCount} songs • {playlist.duration}
                  </span>
                  <button className="text-gray-400 hover:text-black">
                    <FaEllipsisH />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors">
            Browse All Playlists
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuratedPlaylists;

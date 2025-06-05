import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaHeart,
  FaEllipsisH,
  FaFire,
} from "react-icons/fa";

const CuratedPlaylists = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Playlist data
  const playlists = [
    {
      id: 1,
      cover: "/worship-morning.jpg",
      title: "Morning Praise",
      description: "Uplifting worship to start your day in His presence",
      songs: 12,
      duration: "48 min",
      mood: "Peaceful",
      occasion: "Morning Devotion",
      genre: "Worship",
      isTrending: true,
    },
    {
      id: 2,
      cover: "/youth-praise.jpg",
      title: "Youth Revival",
      description: "Energetic praise for young hearts on fire for God",
      songs: 15,
      duration: "1 hr 2 min",
      mood: "Joyful",
      occasion: "Youth Night",
      genre: "CCM",
      isTrending: false,
    },

    {
      id: 3,
      cover: "/prayer-instrumental.jpg",
      title: "Sacred Quiet",
      description: "Instrumental hymns for deep prayer and reflection",
      songs: 8,
      duration: "1 hr 15 min",
      mood: "Reflective",
      occasion: "Personal Worship",
      genre: "Hymns",
      isTrending: true,
    },
    {
      id: 4,
      cover: "/sunday-service.jpg",
      title: "Sunday Glory",
      description: "Powerful congregational worship favorites",
      songs: 20,
      duration: "1 hr 30 min",
      mood: "Joyful",
      occasion: "Sunday Worship",
      genre: "Gospel",
      isTrending: true,
    },
    {
      id: 5,
      cover: "/bible-study.jpg",
      title: "Scripture Songs",
      description: "Word-based melodies for meditation and memorization",
      songs: 10,
      duration: "42 min",
      mood: "Reflective",
      occasion: "Bible Study",
      genre: "Worship",
      isTrending: false,
    },
    {
      id: 6,
      cover: "/praise-party.jpg",
      title: "Celebration Mix",
      description: "Victorious anthems for seasons of breakthrough",
      songs: 18,
      duration: "1 hr 12 min",
      mood: "Joyful",
      occasion: "Special Events",
      genre: "Gospel",
      isTrending: true,
    },
    {
      id: 7,
      cover: "/evening-worship.jpg",
      title: "Evening Reflection",
      description: "Soothing worship for end-of-day devotion",
      songs: 9,
      duration: "35 min",
      mood: "Peaceful",
      occasion: "Evening Prayer",
      genre: "Worship",
      isTrending: false,
    },
    {
      id: 8,
      cover: "/kids-praise.jpg",
      title: "Kids Praise Party",
      description: "Fun worship songs for young believers",
      songs: 15,
      duration: "52 min",
      mood: "Joyful",
      occasion: "Children",
      genre: "CCM",
      isTrending: true,
    },
    {
      id: 9,
      cover: "/piano-worship.jpg",
      title: "Piano Worship",
      description: "Beautiful instrumental arrangements",
      songs: 12,
      duration: "1 hr",
      mood: "Peaceful",
      occasion: "Meditation",
      genre: "Instrumental",
      isTrending: false,
    },
    {
      id: 10,
      cover: "/prayer-warrior.jpg",
      title: "Prayer Warrior",
      description: "Songs to strengthen your prayer life",
      songs: 10,
      duration: "45 min",
      mood: "Reflective",
      occasion: "Intercession",
      genre: "Worship",
      isTrending: true,
    },
  ];

  // Filter options
  const filters = [
    "All",
    "Joyful",
    "Peaceful",
    "Reflective",
    "Morning Devotion",
    "Youth Night",
    "Sunday Worship",
    "Children",
    "Meditation",
  ];

  // Filter function
  const filteredPlaylists =
    activeFilter === "All"
      ? playlists
      : playlists.filter(
          (p) => p.mood === activeFilter || p.occasion === activeFilter
        );

  // Carousel navigation
  const itemsPerPage = 5;
  const maxIndex = Math.max(0, filteredPlaylists.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visiblePlaylists = filteredPlaylists.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-12 px-8 bg-gray-50 relative">
      <div className="container mx-auto">
        {/* Header with Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900">
              Curated Playlists
            </h2>
            <p className="text-gray-600">
              Perfect collections for your spiritual journey
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-black text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {filteredPlaylists.length > itemsPerPage && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaChevronLeft className="text-gray-700" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ${
                  currentIndex >= maxIndex
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaChevronRight className="text-gray-700" />
              </button>
            </>
          )}

          {/* Carousel Track */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full container mx-auto px-4">
              {visiblePlaylists.map((playlist) => (
                <motion.div
                  key={playlist.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col"
                >
                  {/* Cover Image */}
                  <div className="relative aspect-square">
                    <img
                      src={playlist.cover}
                      alt={playlist.title}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                    {playlist.isTrending && (
                      <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-full flex items-center">
                        <FaFire className="mr-1" size={10} />
                        Trending
                      </div>
                    )}
                    <button className="absolute bottom-3 right-3 w-10 h-10 bg-black/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-gray-800 transition-all">
                      <FaPlay className="text-white text-xs" />
                    </button>
                  </div>

                  {/* Playlist Details */}
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                      {playlist.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {playlist.description}
                    </p>

                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {playlist.songs} songs • {playlist.duration}
                      </span>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <FaHeart size={14} />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <FaEllipsisH size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots - Only show if there are multiple pages */}
        {filteredPlaylists.length > itemsPerPage && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-black w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CuratedPlaylists;

import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaChevronRight } from "react-icons/fa";

const EmergingArtist = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [favorites, setFavorites] = useState([]);

  // Complete artist data
  const artists = [
    {
      id: 1,
      photo: "/gospel-artist.jpg",
      name: "Ethan Grace",
      genre: "Gospel",
      bio: "Blending traditional gospel with contemporary sounds to create uplifting worship experiences",
      featuredReason: "Trending on Gospel Charts",
      followers: "24.5K",
      location: "Nashville, TN",
      debut: "2023",
    },
    {
      id: 2,
      photo: "/worship-artist.jpg",
      name: "Hannah Light",
      genre: "Worship",
      bio: "Intimate worship leader creating spaces for divine encounters through song",
      featuredReason: "Viral Worship Anthem",
      followers: "18.2K",
      location: "Dallas, TX",
      debut: "2022",
    },
    {
      id: 3,
      photo: "/ccm-artist.jpg",
      name: "Noah Praise",
      genre: "CCM",
      bio: "Contemporary Christian artist with lyrics that speak to modern faith journeys",
      featuredReason: "New Album Release",
      followers: "32.1K",
      location: "Orlando, FL",
      debut: "2021",
    },
    {
      id: 4,
      photo: "/hiphop-artist.jpg",
      name: "Prophet Micah",
      genre: "Christian Hip-Hop",
      bio: "Street poet turned evangelist with groundbreaking holy hip-hop",
      featuredReason: "Featured on Holy Hip-Hop Radio",
      followers: "45.3K",
      location: "Chicago, IL",
      debut: "2020",
    },
    {
      id: 5,
      photo: "/rock-artist.jpg",
      name: "Kingdom Sound",
      genre: "Christian Rock",
      bio: "Energetic rock band with scripture-based lyrics that ignite faith",
      featuredReason: "Summer Festival Headliner",
      followers: "28.7K",
      location: "Denver, CO",
      debut: "2019",
    },
    {
      id: 6,
      photo: "/choir-artist.jpg",
      name: "The Redeemed",
      genre: "Gospel",
      bio: "20-voice choir bringing fresh fire to classic hymns with contemporary arrangements",
      featuredReason: "2024 Stellar Award Nominee",
      followers: "15.2K",
      location: "Atlanta, GA",
      debut: "2022",
    },
    {
      id: 7,
      photo: "/worship-artist2.jpg",
      name: "Eden Worship Collective",
      genre: "Worship",
      bio: "Creating spontaneous worship moments that usher in God's presence",
      featuredReason: "Youth Conference Breakout",
      followers: "9.8K",
      location: "Austin, TX",
      debut: "2023",
    },
    {
      id: 8,
      photo: "/ccm-artist2.jpg",
      name: "Lily & Grace",
      genre: "CCM",
      bio: "Mother-daughter duo writing songs of hope for women of all ages",
      featuredReason: "Featured on Women of Faith Tour",
      followers: "21.6K",
      location: "Seattle, WA",
      debut: "2021",
    },
  ];

  const genres = [
    "All",
    "Gospel",
    "Worship",
    "CCM",
    "Christian Hip-Hop",
    "Christian Rock",
  ];

  const filteredArtists =
    activeGenre === "All"
      ? artists
      : artists.filter((artist) => artist.genre === activeGenre);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        {/* Simplified Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 text-gray-600 font-medium tracking-wider">
            DISCOVER TALENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Emerging Artists
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fresh voices in Christian music you should know
          </p>
        </div>

        {/* Clean Genre Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeGenre === genre
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Minimalist Artist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <motion.div
              key={artist.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              {/* Artist Image */}
              <div className="relative h-60">
                <img
                  src={artist.photo}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleFavorite(artist.id)}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full"
                >
                  {favorites.includes(artist.id) ? (
                    <FaHeart className="text-gray-600" />
                  ) : (
                    <FaRegHeart className="text-gray-600" />
                  )}
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-xs font-medium text-white bg-black px-2 py-1 rounded">
                    {artist.genre}
                  </span>
                </div>
              </div>

              {/* Artist Info */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {artist.name}
                    </h3>
                    <p className="text-sm text-gray-500">{artist.location}</p>
                  </div>
                  <span className="text-xs text-gray-400">{artist.debut}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {artist.bio}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    {artist.followers} followers
                  </span>
                  <a
                    href={`/artists/${artist.id}`}
                    className="flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium"
                  >
                    View <FaChevronRight className="ml-1" size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center">
            Browse All Artists
            <FaChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmergingArtist;

import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import img from "../../../assets/images/genre/img3.jpg";

const HeroGenre = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("Gospel");

  const genres = ["Gospel", "Worship", "CCM", "Hymns"];

  return (
    <div className="relative h-[80vh] max-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Music background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="text-gray-300">Elevate</span> Your Worship
            Experience
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Discover {selectedGenre.toLowerCase()} music that connects you with
            the divine
          </motion.p>

          {/* Genre Dropdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative inline-block mb-8 mx-auto"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between px-6 py-3 bg-black/60 backdrop-blur-sm text-gray-100 rounded-full border border-gray-400/30 hover:bg-gray-800/60 transition-all"
            >
              <span className="mr-2">{selectedGenre}</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 right-0 mt-2 bg-black/90 backdrop-blur-md rounded-xl shadow-xl z-20 py-2 overflow-hidden"
              >
                {genres.map((genre) => (
                  <li key={genre}>
                    <button
                      onClick={() => {
                        setSelectedGenre(genre);
                        setIsOpen(false);
                      }}
                      className={`block w-full text-left px-6 py-3 hover:bg-gray-800/50 transition-colors ${
                        selectedGenre === genre
                          ? "text-gray-300 font-medium"
                          : "text-gray-100"
                      }`}
                    >
                      {genre}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button className="px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Browse {selectedGenre} Collection
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroGenre;

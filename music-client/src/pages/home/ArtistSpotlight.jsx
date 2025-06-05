import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserFriends,
  FaCalendarAlt,
} from "react-icons/fa";
import hillsong from "../../assets/images/artists/hillsong.jpg";
import elevation from "../../assets/images/artists/elevation.jpg";
import maverick from "../../assets/images/artists/maverick city.jpeg";
import bethel from "../../assets/images/artists/bethel music.jpg";

const ArtistSpotlight = () => {
  const artists = [
    {
      id: 1,
      name: "Hillsong Worship",
      photo: hillsong,
      bio: "Global worship movement creating songs sung by churches worldwide",
      followers: "2.4M",
      activeSince: 1983,
    },
    {
      id: 2,
      name: "Elevation Worship",
      photo: elevation,
      bio: "Contemporary worship music from Elevation Church, North Carolina",
      followers: "1.8M",
      activeSince: 2007,
    },
    {
      id: 3,
      name: "Maverick City Music",
      photo: maverick,
      bio: "Diverse collective rewriting the sound of worship music",
      followers: "1.2M",
      activeSince: 2018,
    },
    {
      id: 4,
      name: "Bethel Music",
      photo: bethel,
      bio: "Worship team from Bethel Church in Redding, California",
      followers: "1.5M",
      activeSince: 2001,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [showArrows, setShowArrows] = useState(false);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === artists.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? artists.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Headline */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-800 mb-4">
            Artist Spotlight
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
            Voices That Inspire Faith
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the artists behind the worship music that moves hearts and spirits
          </p>
        </div>
        
        <div
          className="relative w-full h-screen max-h-[600px] overflow-hidden rounded-xl"
          onMouseEnter={() => setShowArrows(true)}
          onMouseLeave={() => setShowArrows(false)}
        >
          <AnimatePresence>
            <motion.div
              key={artists[currentIndex].id}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-black/30 z-0">
                <img
                  src={artists[currentIndex].photo}
                  alt={artists[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content Overlay */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-2xl"
                  >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                      {artists[currentIndex].name}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                      {artists[currentIndex].bio}
                    </p>
                    <div className="flex items-center space-x-6 mb-8">
                      <div className="flex items-center">
                        <FaUserFriends className="mr-2 text-2xl" />
                        <span className="text-lg">
                          {artists[currentIndex].followers} followers
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-xl" />
                        <span className="text-lg">
                          Since {artists[currentIndex].activeSince}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        View Profile
                      </button>
                      <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
                        Listen Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Arrows (hidden by default, shown on hover) */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/30 text-white transition-all duration-300 ${
              showArrows ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/30 text-white transition-all duration-300 ${
              showArrows ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <FaChevronRight className="text-2xl" />
          </button>
          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {artists.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;

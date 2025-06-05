import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaRegHeart, FaPlay, FaHeadphones } from "react-icons/fa";
import worship from "../../assets/images/home/mood/amazing grace.jpeg";
import worship1 from "../../assets/images/home/mood/beautiful name.jpg";
import peaceful from "../../assets/images/home/mood/be still.jpg";
import peaceful1 from "../../assets/images/home/mood/still.jpeg";
import energetic from "../../assets/images/home/mood/into garden.jpeg";
import energetic1 from "../../assets/images/home/mood/blessing.jpeg";
import reflective from "../../assets/images/home/mood/altar.jpg";
import reflective1 from "../../assets/images/home/mood/life.jpeg";
import joyful from "../../assets/images/home/mood/joyful.jpg";
import joyful1 from "../../assets/images/home/mood/goodness.jpeg";
import grateful from "../../assets/images/home/mood/thank you.jpg";
import grateful1 from "../../assets/images/home/mood/grattitude.jpg";

const ForYourMood = () => {
  const [activeMood, setActiveMood] = useState("worship");
  const [favorites, setFavorites] = useState([]);
  const [bgGradient, setBgGradient] = useState("from-gray-50 to-white");

  const moodData = {
    worship: [
      {
        id: 1,
        title: "Amazing Grace",
        artist: "Hillsong Worship",
        plays: "2.4M",
        cover: worship,
      },
      {
        id: 2,
        title: "What A Beautiful Name",
        artist: "Hillsong Worship",
        plays: "5.1M",
        cover: worship1,
      },
    ],
    peaceful: [
      {
        id: 3,
        title: "Peace Be Still",
        artist: "Hope Darst",
        plays: "1.2M",
        cover: peaceful,
      },
      {
        id: 4,
        title: "Still",
        artist: "Hillsong Worship",
        plays: "890K",
        cover: peaceful1,
      },
    ],
    energetic: [
      {
        id: 5,
        title: "Graves Into Gardens",
        artist: "Elevation Worship",
        plays: "3.7M",
        cover: energetic,
      },
      {
        id: 6,
        title: "The Blessing",
        artist: "Kari Jobe",
        plays: "4.2M",
        cover: energetic1,
      },
    ],
    reflective: [
      {
        id: 7,
        title: "O Come to the Altar",
        artist: "Elevation Worship",
        plays: "2.1M",
        cover: reflective,
      },
      {
        id: 8,
        title: "Build My Life",
        artist: "Housefires",
        plays: "1.8M",
        cover: reflective1,
      },
    ],
    joyful: [
      {
        id: 9,
        title: "Joyful Joyful",
        artist: "Passion",
        plays: "1.5M",
        cover: joyful,
      },
      {
        id: 10,
        title: "Goodness of God",
        artist: "Bethel Music",
        plays: "6.3M",
        cover: joyful1,
      },
    ],
    grateful: [
      {
        id: 11,
        title: "Thank You Jesus",
        artist: "Hillsong Worship",
        plays: "2.9M",
        cover: grateful,
      },
      {
        id: 12,
        title: "Gratitude",
        artist: "Brandon Lake",
        plays: "3.4M",
        cover: grateful1,
      },
    ],
  };

  const moods = [
    {
      id: "worship",
      label: "Worship",
      icon: "🙏",
      color: "bg-gradient-to-r from-purple-600 to-indigo-600",
      bgGradient: "from-purple-50 to-white",
    },
    {
      id: "peaceful",
      label: "Peaceful",
      icon: "🕊️",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-white",
    },
    {
      id: "energetic",
      label: "Energetic",
      icon: "⚡",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-white",
    },
    {
      id: "reflective",
      label: "Reflective",
      icon: "💭",
      color: "bg-gradient-to-r from-indigo-500 to-violet-500",
      bgGradient: "from-indigo-50 to-white",
    },
    {
      id: "joyful",
      label: "Joyful",
      icon: "😊",
      color: "bg-gradient-to-r from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-white",
    },
    {
      id: "grateful",
      label: "Grateful",
      icon: "❤️",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-white",
    },
  ];

  const handleMoodChange = (moodId) => {
    setActiveMood(moodId);
    const selectedMood = moods.find(mood => mood.id === moodId);
    setBgGradient(selectedMood.bgGradient);
  };

  const toggleFavorite = (id) => {
    setFavorites(
      favorites.includes(id)
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id]
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${bgGradient} transition-all duration-500`}>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Music For Your Soul's Journey
          </h2>
          <p className="text-xl text-gray-600">
            Discover worship music that resonates with your current spiritual season
          </p>
        </motion.div>

        {/* Mood Selector */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-full bg-white p-1 shadow-lg border border-gray-200">
            {moods.map((mood) => (
              <motion.button
                key={mood.id}
                onClick={() => handleMoodChange(mood.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium flex items-center relative overflow-hidden ${
                  activeMood === mood.id
                    ? "text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeMood === mood.id && (
                  <motion.span
                    layoutId="activeMood"
                    className={`absolute inset-0 ${mood.color}`}
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
                <span className="text-xl mr-2 z-10">{mood.icon}</span>
                <span className="z-10">{mood.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Spotlight Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMood}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  {moods.find((m) => m.id === activeMood)?.label} Spotlight
                </h3>
                <div className="flex items-center text-gray-600">
                  <FaHeadphones className="mr-2" />
                  <span>Curated for your current mood</span>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-full text-gray-800 font-medium transition-all shadow-sm"
              >
                View all
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Music Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {moodData[activeMood]?.map((song) => (
              <motion.div
                key={song.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {/* Album Art */}
                <div className="relative overflow-hidden h-60">
                  <motion.img
                    src={song.cover}
                    alt={song.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  
                  {/* Favorite Button */}
                  <motion.button
                    onClick={() => toggleFavorite(song.id)}
                    className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md ${
                      favorites.includes(song.id)
                        ? "bg-red-500/90 text-white"
                        : "bg-white/80 text-gray-700"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {favorites.includes(song.id) ? <FaHeart /> : <FaRegHeart />}
                  </motion.button>
                  
                  {/* Play Button */}
                  <motion.button
                    className="absolute bottom-4 left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaPlay className="text-white ml-1" />
                  </motion.button>
                </div>
                
                {/* Song Info */}
                <div className="p-5">
                  <h4 className="font-bold text-xl text-gray-900 mb-1 truncate">
                    {song.title}
                  </h4>
                  <p className="text-gray-600 mb-3">{song.artist}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500 flex items-center">
                        <FaHeadphones className="mr-1" /> {song.plays}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-black capitalize">
                      {activeMood}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to dive deeper?
          </h3>
          <motion.button
            className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Worship Music
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ForYourMood;
import { useState } from "react";
import {
  FaPlay,
  FaHeart,
  FaDownload,
  FaMusic,
  FaCompactDisc,
} from "react-icons/fa";

// Import images
import beautifulName from "../../../assets/images/home/mood/beautiful name.jpg";
import goodness from "../../../assets/images/home/mood/goodness.jpeg";
import altar from "../../../assets/images/home/mood/altar.jpg";
import reckless from "../../../assets/images/home/mood/reckless.jpg";
import awake from "../../../assets/images/home/mood/awake.jpeg";
import intoGarden from "../../../assets/images/home/mood/into garden.jpeg";
import thereIsMore from "../../../assets/images/home/mood/There_Is_More.jpg";
import victory from "../../../assets/images/home/mood/Victory.jpg";

const FeaturedSongAlbum = () => {
  const genres = [
    {
      id: 1,
      name: "Spotlight Songs & Albums",
      songs: [
        {
          id: 1,
          title: "What A Beautiful Name",
          artist: "Hillsong Worship",
          cover: beautifulName,
          price: "$1.29",
          duration: "3:42",
        },
        {
          id: 2,
          title: "Goodness of God",
          artist: "Bethel Music",
          cover: goodness,
          price: "$1.49",
          duration: "4:18",
        },
        {
          id: 3,
          title: "O Come to the Altar",
          artist: "Elevation Worship",
          cover: altar,
          price: "$0.99",
          duration: "5:21",
        },
        {
          id: 4,
          title: "Reckless Love",
          artist: "Cory Asbury",
          cover: reckless,
          price: "$1.19",
          duration: "4:56",
        },
      ],
      albums: [
        {
          id: 1,
          title: "Awake",
          artist: "Hillsong Worship",
          cover: awake,
          price: "$9.99",
          year: "2019",
        },
        {
          id: 2,
          title: "Graves Into Gardens",
          artist: "Elevation Worship",
          cover: intoGarden,
          price: "$11.99",
          year: "2020",
        },
        {
          id: 3,
          title: "There Is More",
          artist: "Hillsong Worship",
          cover: thereIsMore,
          price: "$8.99",
          year: "2018",
        },
        {
          id: 4,
          title: "Victory",
          artist: "Bethel Music",
          cover: victory,
          price: "$10.49",
          year: "2019",
        },
      ],
    },
  ];

  const [activeContentTab, setActiveContentTab] = useState("songs");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="container mx-auto p-6">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-justify">
        Spotlight Songs & Albums
      </h1>

      {/* Content Type Tabs */}
      <div className="flex justify-center border-b border-gray-200">
        <button
          className={`flex items-center py-3 px-6 font-medium text-lg ${
            activeContentTab === "songs"
              ? "text-black border-b-2 border-black"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveContentTab("songs")}
        >
          <FaMusic className="mr-2" />
          Songs
        </button>
        <button
          className={`flex items-center py-3 px-6 font-medium text-lg ${
            activeContentTab === "albums"
              ? "text-black border-b-2 border-black"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveContentTab("albums")}
        >
          <FaCompactDisc className="mr-2" />
          Albums
        </button>
      </div>

      {/* Main Content Area */}
      <div className="mt-6">
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {(activeContentTab === "songs"
            ? genres[0].songs
            : genres[0].albums
          ).map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 rounded-full p-3 text-white hover:bg-opacity-100 transition-all">
                  {activeContentTab === "songs" ? (
                    <FaPlay />
                  ) : (
                    <FaCompactDisc />
                  )}
                </button>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {activeContentTab === "songs" ? item.duration : item.year}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg truncate">{item.title}</h3>
                <p className="text-gray-600 truncate">{item.artist}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-gray-900">{item.price}</span>
                  <div className="flex space-x-3">
                    {activeContentTab === "songs" && (
                      <button
                        className={`p-2 rounded-full hover:bg-gray-100 ${
                          favorites.includes(item.id)
                            ? "text-gray-600"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                        onClick={() => toggleFavorite(item.id)}
                      >
                        <FaHeart />
                      </button>
                    )}
                  </div>
                </div>
                <button className="mt-3 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  {activeContentTab === "songs" ? "Download" : "Buy Album"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSongAlbum;

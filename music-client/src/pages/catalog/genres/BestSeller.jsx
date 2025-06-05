import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaPlay,
  FaShoppingCart,
  FaDownload,
  FaStar,
  FaRegStar,
  FaFire,
  FaCrown,
  FaTwitter,
  FaInstagram,
  FaHashtag,
  FaRetweet,
  FaHeart,
  FaComment,
} from "react-icons/fa";

const BestSeller = () => {
  // Sample bestseller data
  const bestsellers = [
    {
      id: 1,
      type: "song",
      title: "What A Beautiful Name",
      artist: "Hillsong Worship",
      cover: "https://via.placeholder.com/300x300?text=Worship1",
      price: "$1.29",
      rank: 1,
      downloads: "1.2M",
      rating: 4.8,
      isTrending: true,
    },
    {
      id: 2,
      type: "song",
      title: "Goodness of God",
      artist: "Bethel Music",
      cover: "https://via.placeholder.com/300x300?text=Worship2",
      price: "$1.49",
      downloads: "980K",
      rating: 4.9,
      isTrending: true,
    },
    {
      id: 3,
      type: "song",
      title: "Reckless Love",
      artist: "Cory Asbury",
      cover: "https://via.placeholder.com/300x300?text=Worship3",
      price: "$1.19",
      downloads: "1.5M",
      rating: 4.7,
    },
    {
      id: 4,
      type: "song",
      title: "O Come to the Altar",
      artist: "Elevation Worship",
      cover: "https://via.placeholder.com/300x300?text=Worship4",
      price: "$0.99",
      downloads: "890K",
      rating: 4.6,
    },
    {
      id: 5,
      type: "album",
      title: "Awake",
      artist: "Hillsong Worship",
      cover: "https://via.placeholder.com/300x300?text=Album1",
      price: "$9.99",
      downloads: "850K",
      rating: 4.9,
      isTrending: true,
    },
    {
      id: 6,
      type: "album",
      title: "Graves Into Gardens",
      artist: "Elevation Worship",
      cover: "https://via.placeholder.com/300x300?text=Album2",
      price: "$11.99",
      downloads: "720K",
      rating: 4.8,
    },
    {
      id: 7,
      type: "album",
      title: "Victory",
      artist: "Bethel Music",
      cover: "https://via.placeholder.com/300x300?text=Album3",
      price: "$10.49",
      downloads: "680K",
      rating: 4.7,
    },
    {
      id: 8,
      type: "album",
      title: "There Is More",
      artist: "Hillsong Worship",
      cover: "https://via.placeholder.com/300x300?text=Album4",
      price: "$8.99",
      downloads: "920K",
      rating: 4.8,
      isTrending: true,
    },
  ];

  // Sample trending topics data - replace with real API data
  // eslint-disable-next-line no-unused-vars
  const trendingTopics = [
    {
      id: 1,
      platform: "twitter",
      hashtag: "#WorshipMusic",
      postCount: "125K",
      engagement: {
        likes: "45.2K",
        retweets: "12.8K",
        comments: "3.4K",
      },
      trendingRank: 1,
      isRising: true,
    },
    {
      id: 2,
      platform: "instagram",
      hashtag: "#ChristianMusic",
      postCount: "98K",
      engagement: {
        likes: "32.5K",
        comments: "5.1K",
      },
      trendingRank: 2,
      isRising: true,
    },
    {
      id: 3,
      platform: "twitter",
      hashtag: "#GospelMusic",
      postCount: "75K",
      engagement: {
        likes: "28.3K",
        retweets: "8.9K",
        comments: "2.7K",
      },
      trendingRank: 3,
      isRising: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(bestsellers.length / itemsPerPage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
        setIsTransitioning(false);
      }, 1000); // Matches the transition duration
    }, 8000); // Increased interval to 8 seconds

    return () => clearInterval(timer);
  }, [totalPages]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < Math.floor(rating) ? (
        <FaStar key={i} className="text-gray-400" size={12} />
      ) : (
        <FaRegStar key={i} className="text-gray-400" size={12} />
      )
    );
  };

  return (
    <section className="py-12 px-4 bg-gray-50 rounded-xl">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <FaFire className="text-gray-600 mr-3" size={24} />
              Bestselling Worship Music
            </h2>
            <p className="text-gray-600 mt-2">Top songs and albums this week</p>
          </div>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            View All
          </button>
        </div>

        {/* Auto-sliding Carousel */}
        <div className="relative overflow-hidden min-h-[400px]">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0.5 : 1 }}
            transition={{ duration: 1 }} // Slower 1-second fade
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bestsellers
              .slice(
                currentIndex * itemsPerPage,
                (currentIndex + 1) * itemsPerPage
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Cover with Badge */}
                  <div className="relative">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-t-xl"
                    />
                    {item.rank === 1 ? (
                      <div className="absolute -top-3 -right-3 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-10">
                        <FaCrown size={16} />
                      </div>
                    ) : item.isTrending ? (
                      <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        TRENDING
                      </div>
                    ) : null}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg truncate">{item.title}</h3>
                    <p className="text-gray-600 text-sm truncate">
                      {item.artist}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center mt-3 mb-4">
                      <div className="flex mr-2">
                        {renderStars(item.rating)}
                      </div>
                      <span className="text-xs text-gray-500">
                        {item.downloads}{" "}
                        {item.type === "song" ? "downloads" : "sales"}
                      </span>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">
                        {item.price}
                      </span>
                      <div className="flex space-x-3">
                        <button
                          className={`p-3 rounded-full ${
                            item.type === "song"
                              ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                          title={
                            item.type === "song" ? "Download" : "Add to Cart"
                          }
                        >
                          {item.type === "song" ? (
                            <FaDownload size={16} />
                          ) : (
                            <FaShoppingCart size={16} />
                          )}
                        </button>
                        <button
                          className="p-3 bg-black text-white rounded-full hover:bg-gray-800"
                          title="Play preview"
                        >
                          <FaPlay size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-1000 ${
                  currentIndex === index ? "bg-black w-6" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;

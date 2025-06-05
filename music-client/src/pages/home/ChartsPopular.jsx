import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaArrowUp,
  FaArrowDown,
  FaFire,
  FaMusic,
  FaChartLine,
} from "react-icons/fa";
import axios from "axios";
import { formatNumber } from "../../utils/formatUtils";

const ChartsPopular = () => {
  const [activeTab, setActiveTab] = useState("songs");
  const [chartData, setChartData] = useState({
    songs: [],
    albums: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [songsResponse, albumsResponse] = await Promise.all([
          axios.get("/api/charts/top", { params: { type: "songs" } }),
          axios.get("/api/charts/top", { params: { type: "albums" } }),
        ]);

        const songs = songsResponse.data.map((track, index) => ({
          id:
            track.id ||
            `${track.artist}-${track.name}`.replace(/\s+/g, "-").toLowerCase(),
          rank: index + 1,
          title: track.name,
          artist: track.artist,
          coverArt: track.image,
          trend: track.trend || (index < 3 ? "up" : "steady"),
          plays: formatNumber(track.playcount),
          listeners: formatNumber(track.listeners),
          length:
            track.duration > 0
              ? `${Math.floor(track.duration / 60)}:${(track.duration % 60)
                  .toString()
                  .padStart(2, "0")}`
              : "--:--",
          isTrending: index < 3,
          url: track.url,
        }));

        const albums = albumsResponse.data.map((album, index) => ({
          id:
            album.id ||
            `${album.artist}-${album.name}`.replace(/\s+/g, "-").toLowerCase(),
          rank: index + 1,
          title: album.name,
          artist: album.artist,
          coverArt: album.image,
          plays: formatNumber(album.playcount),
          isTrending: index < 3,
          url: album.url,
        }));

        setChartData({ songs, albums });
      } catch (err) {
        console.error("Failed to fetch chart data:", err);
        setError(
          err.response?.data?.error ||
            err.message ||
            "Failed to load chart data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchChartData();
  }, [activeTab]);

  const handlePlay = (trackId) => {
    if (nowPlaying === trackId) {
      setNowPlaying(null);
    } else {
      setNowPlaying(trackId);
    }
  };

  const formatTrend = (trend) => {
    switch (trend) {
      case "up":
        return {
          icon: <FaArrowUp className="mr-1" />,
          text: "Trending",
          class: "bg-green-100 text-green-700",
        };
      case "down":
        return {
          icon: <FaArrowDown className="mr-1" />,
          text: "Down",
          class: "bg-red-100 text-red-700",
        };
      case "new":
        return {
          icon: <FaMusic className="mr-1" />,
          text: "NEW",
          class: "bg-blue-100 text-blue-700",
        };
      default:
        return {
          icon: <FaChartLine className="mr-1" />,
          text: "Steady",
          class: "bg-gray-100 text-gray-700",
        };
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black mb-4"></div>
          <p className="text-gray-600">Loading chart data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-black mb-2">
          Christian Music Charts
        </h2>
        <p className="text-gray-600 text-lg">
          Discover what's trending in Christian music
        </p>
      </div>

      {/* Tab Filters */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full bg-white shadow-sm p-1">
          {["songs", "albums"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                activeTab === tab
                  ? "bg-black text-white shadow-md"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab === "songs" ? "Top Songs" : "Top Albums"}
            </button>
          ))}
        </div>
      </div>

      {/* Chart List */}
      <div className="max-w-6xl mx-auto space-y-3">
        {chartData[activeTab]?.length > 0 ? (
          chartData[activeTab].map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-4 flex items-center transition-all duration-300 hover:shadow-lg ${
                item.rank === 1
                  ? "border-l-4 border-black glow-effect shadow-lg"
                  : "border-l-2 border-transparent hover:border-gray-200"
              }`}
            >
              {/* Rank Number */}
              <div
                className={`text-2xl font-bold w-12 text-center ${
                  item.rank === 1
                    ? "bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text"
                    : item.rank <= 3
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                {item.rank}
              </div>

              {/* Cover Art + Play Button */}
              <div className="relative mr-4 group flex-shrink-0">
                <img
                  src={item.coverArt}
                  alt={`${item.title} - ${item.artist}`}
                  className="w-16 h-16 rounded-lg object-cover shadow-md"
                />
                <button
                  onClick={() => handlePlay(item.id)}
                  className="absolute inset-0 m-auto w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-110 transform transition-transform"
                >
                  {nowPlaying === item.id ? (
                    <FaPause size={12} className="text-black" />
                  ) : (
                    <FaPlay size={12} className="text-black ml-0.5" />
                  )}
                </button>
                {item.isTrending && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-1 rounded-full shadow-sm">
                    <FaFire size={12} />
                  </div>
                )}
              </div>

              {/* Track Info */}
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-800 hover:text-blue-600 transition-colors">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h3>
                <p className="text-gray-600 hover:text-blue-500 transition-colors">
                  <a
                    href={`https://www.last.fm/music/${encodeURIComponent(
                      item.artist
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.artist}
                  </a>
                </p>
                <div className="flex items-center mt-1 space-x-4">
                  <span className="text-xs font-medium text-gray-500">
                    {item.length || "--:--"}
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    {item.plays} plays
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full flex items-center ${
                      formatTrend(item.trend).class
                    }`}
                  >
                    {formatTrend(item.trend).icon}{" "}
                    {formatTrend(item.trend).text}
                  </span>
                </div>
              </div>

              {/* Play Button */}
              <button
                onClick={() => handlePlay(item.id)}
                className={`p-3 rounded-full transition-colors hover:shadow-md ${
                  nowPlaying === item.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {nowPlaying === item.id ? (
                  <FaPause size={14} />
                ) : (
                  <FaPlay size={14} />
                )}
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No {activeTab} data available
          </div>
        )}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <a
          href="https://www.last.fm/tag/christian"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-gray-300"
        >
          View More on Last.fm
        </a>
      </div>

      <style jsx>{`
        .glow-effect {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ChartsPopular;

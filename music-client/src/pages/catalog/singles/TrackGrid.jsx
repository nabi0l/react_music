import React, { useState } from "react";
import {
  FaPlay,
  FaPause,
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
  FaSort,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";

const TrackGrid = () => {
  const [sortConfig, setSortConfig] = useState({
    key: "title",
    direction: "asc",
  });
  const [playingTrack, setPlayingTrack] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  // Sample track data
  const tracks = [
    {
      id: 1,
      title: "Amazing Grace",
      artist: "Hillsong Worship",
      album: "Classic Hymns",
      duration: "4:15",
      price: 1.29,
      genre: "Hymn",
      releaseYear: 2022,
      popularity: 95,
    },
    {
      id: 2,
      title: "What a Beautiful Name",
      artist: "Hillsong Worship",
      album: "Let There Be Light",
      duration: "3:45",
      price: 1.49,
      genre: "Contemporary",
      releaseYear: 2021,
      popularity: 98,
    },
    {
      id: 3,
      title: "Reckless Love",
      artist: "Cory Asbury",
      album: "Reckless Love",
      duration: "5:18",
      price: 1.39,
      genre: "Worship",
      releaseYear: 2020,
      popularity: 97,
    },
    {
      id: 4,
      title: "10,000 Reasons",
      artist: "Matt Redman",
      album: "10,000 Reasons",
      duration: "4:12",
      price: 1.19,
      genre: "Worship",
      releaseYear: 2019,
      popularity: 94,
    },
    {
      id: 5,
      title: "Oceans",
      artist: "Hillsong UNITED",
      album: "Zion",
      duration: "6:23",
      price: 1.59,
      genre: "Worship",
      releaseYear: 2018,
      popularity: 99,
    },
    {
      id: 6,
      title: "Good Good Father",
      artist: "Chris Tomlin",
      album: "The Very Next Thing",
      duration: "3:52",
      price: 1.29,
      genre: "Contemporary",
      releaseYear: 2021,
      popularity: 96,
    },
  ];

  // Sort tracks
  const sortedTracks = [...tracks].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="ml-1 opacity-30" />;
    return sortConfig.direction === "asc" ? (
      <FaSortUp className="ml-1" />
    ) : (
      <FaSortDown className="ml-1" />
    );
  };

  const togglePlay = (id) => {
    setPlayingTrack(playingTrack === id ? null : id);
  };

  const toggleWishlist = (id) => {
    setWishlist(
      wishlist.includes(id)
        ? wishlist.filter((trackId) => trackId !== id)
        : [...wishlist, id]
    );
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with sorting controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
            Worship Tracks
          </h2>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">Sort by:</div>
            <div className="flex space-x-2">
              <button
                onClick={() => requestSort("title")}
                className={`px-3 py-1 rounded-full text-sm flex items-center ${
                  sortConfig.key === "title"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Title {getSortIcon("title")}
              </button>
              <button
                onClick={() => requestSort("artist")}
                className={`px-3 py-1 rounded-full text-sm flex items-center ${
                  sortConfig.key === "artist"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Artist {getSortIcon("artist")}
              </button>
              <button
                onClick={() => requestSort("releaseYear")}
                className={`px-3 py-1 rounded-full text-sm flex items-center ${
                  sortConfig.key === "releaseYear"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Year {getSortIcon("releaseYear")}
              </button>
            </div>
          </div>
        </div>

        {/* Track Grid */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Track
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Artist
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Album
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Genre
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedTracks.map((track) => (
                <tr key={track.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button
                        onClick={() => togglePlay(track.id)}
                        className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                          playingTrack === track.id
                            ? "bg-black text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {playingTrack === track.id ? (
                          <FaPause size={10} />
                        ) : (
                          <FaPlay size={10} className="ml-0.5" />
                        )}
                      </button>
                      <div className="font-medium text-gray-900">
                        {track.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {track.artist}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {track.album}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                      {track.genre}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {track.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-gray-900 font-medium">
                    ${track.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => toggleWishlist(track.id)}
                        className={`p-2 rounded-full ${
                          wishlist.includes(track.id)
                            ? "text-red-500"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        {wishlist.includes(track.id) ? (
                          <FaHeart />
                        ) : (
                          <FaRegHeart />
                        )}
                      </button>
                      <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800">
                        <FaShoppingCart size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination would go here */}
        <div className="mt-8 flex justify-center">
          <nav className="flex space-x-2">
            <button className="px-3 py-1 rounded bg-gray-100 text-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-black text-white">1</button>
            <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">
              3
            </button>
            <button className="px-3 py-1 rounded bg-gray-100 text-gray-700">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TrackGrid;

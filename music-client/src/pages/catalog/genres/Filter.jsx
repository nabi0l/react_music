import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm py-16 mx-auto px-12">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search playlists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="default">Sort by</option>
          <option value="newest">Newest</option>
          <option value="duration">Shortest Duration</option>
          <option value="songs">Most Songs</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

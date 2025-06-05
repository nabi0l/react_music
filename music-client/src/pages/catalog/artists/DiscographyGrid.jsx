import React, { useState } from "react";

const discography = [
  {
    id: 1,
    album: "Grace & Mercy",
    year: 2020,
    image: "https://via.placeholder.com/300x300?text=Album+1",
    trackCount: 12,
    price: 9.99,
  },
  {
    id: 2,
    album: "Faithful",
    year: 2021,
    image: "https://via.placeholder.com/300x300?text=Album+2",
    trackCount: 10,
    price: 8.99,
  },
  {
    id: 3,
    album: "Hope Rising",
    year: 2022,
    image: "https://via.placeholder.com/300x300?text=Album+3",
    trackCount: 14,
    price: 10.99,
  },
  // Add more entries as needed
];

const DiscographyGrid = () => {
  const [filterYear, setFilterYear] = useState("All");
  const [filterAlbum, setFilterAlbum] = useState("All");

  const years = ["All", ...new Set(discography.map((item) => item.year))];
  const albums = ["All", ...new Set(discography.map((item) => item.album))];

  const filteredDiscography = discography.filter((item) => {
    const yearMatch =
      filterYear === "All" || item.year.toString() === filterYear;
    const albumMatch = filterAlbum === "All" || item.album === filterAlbum;
    return yearMatch && albumMatch;
  });

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      {/* Filters */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {/* Year Filter */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Filter by Year
          </label>
          <select
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        {/* Album Filter */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Filter by Album
          </label>
          <select
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filterAlbum}
            onChange={(e) => setFilterAlbum(e.target.value)}
          >
            {albums.map((album) => (
              <option key={album} value={album}>
                {album}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Discography Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredDiscography.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Album Cover */}
            <img
              src={item.image}
              alt={item.album}
              className="w-full h-64 object-cover"
            />
            {/* Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.album}
                </h3>
                <p className="text-gray-600 mb-2">Tracks: {item.trackCount}</p>
                <p className="text-blue-600 font-semibold text-lg">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Buy Now
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscographyGrid;

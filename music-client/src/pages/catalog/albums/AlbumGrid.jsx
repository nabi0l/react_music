import React, { useState } from "react";
import {
  FaPlay,
  FaPause,
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

import citizenHeaven  from '../../../assets/images/albums/Citizen_of_Heaven_by_Tauren_Wells_(Official_Album_Cover).png'
import areWeThereYet from '../../../assets/images/albums/are we there yet.jpg';
import lookUpChild from "../../../assets/images/albums/look up child.jpg";
import comeUpHere from "../../../assets/images/albums/come up here.jpg";
import holyForever from "../../../assets/images/albums/holyForever.jpg";
import lion from "../../../assets/images/albums/lion.jpg";
const AlbumGrid = () => {
  const [hoveredAlbum, setHoveredAlbum] = useState(null);
  const [playingPreview, setPlayingPreview] = useState(null);
  const [wishlist, setWishlist] = useState([]);


  // Sample album data - mixed artists
  const albums = [
    {
      id: 1,
      cover: citizenHeaven,
      artist: "Tauren Wells",
      title: "Citizen of Heaven",
      year: 2023,
      format: "Digital Album",
      badges: ["Bestseller", "Includes instant download"],
      price: 9.99,
      originalPrice: 12.99,
      type: "solo",
    },
    {
      id: 2,
      cover: areWeThereYet,
      artist: "Hillsong UNITED",
      title: "Are We There Yet?",
      year: 2022,
      format: "180g Vinyl + Digital",
      badges: ["Limited Edition"],
      price: 34.99,
      originalPrice: 39.99,
      type: "worship-team",
    },
    {
      id: 3,
      cover: lookUpChild,
      artist: "Lauren Daigle",
      title: "Look Up Child",
      year: 2021,
      format: "CD + Digital",
      badges: ["Bestseller"],
      price: 14.99,
      type: "solo",
    },
    {
      id: 4,
      cover: comeUpHere,
      artist: "Bethel Music",
      title: "Come Up Here",
      year: 2023,
      format: "Deluxe Edition",
      badges: ["Exclusive"],
      price: 19.99,
      originalPrice: 24.99,
      type: "worship-team",
    },
    {
      id: 5,
      cover: holyForever,
      artist: "Chris Tomlin",
      title: "Holy Forever",
      year: 2022,
      format: "Vinyl + Digital",
      badges: ["Includes instant download"],
      price: 29.99,
      type: "solo",
    },
    {
      id: 6,
      cover: lion,
      artist: "Elevation Worship",
      title: "LION",
      year: 2022,
      format: "CD + Digital",
      badges: ["Bestseller"],
      price: 12.99,
      originalPrice: 15.99,
      type: "worship-team",
    },
  ];

  const toggleWishlist = (id) => {
    setWishlist(
      wishlist.includes(id)
        ? wishlist.filter((albumId) => albumId !== id)
        : [...wishlist, id]
    );
  };

  const togglePreview = (id) => {
    setPlayingPreview(playingPreview === id ? null : id);
  };

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Christian Albums
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHoveredAlbum(album.id)}
              onMouseLeave={() => setHoveredAlbum(null)}
            >
              {/* Album Cover with Badges and Preview */}
              <div className="relative">
                <a href={`/album/${album.id}`} className="block">
                  <img
                    src={album.cover}
                    alt={`${album.title} cover`}
                    className="w-full h-64 object-cover"
                  />
                </a>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                  {album.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs font-bold rounded-full ${
                        badge === "Bestseller"
                          ? "bg-yellow-500 text-black"
                          : badge === "Limited Edition"
                          ? "bg-red-600 text-white"
                          : badge === "Exclusive"
                          ? "bg-purple-600 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Preview Button */}
                {hoveredAlbum === album.id && (
                  <button
                    onClick={() => togglePreview(album.id)}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-black bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition"
                  >
                    {playingPreview === album.id ? (
                      <FaPause />
                    ) : (
                      <FaPlay className="ml-1" />
                    )}
                  </button>
                )}
              </div>

              {/* Album Info */}
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {album.title}
                    </h3>
                    <p className="text-gray-600">{album.artist}</p>
                  </div>
                  <button
                    onClick={() => toggleWishlist(album.id)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    {wishlist.includes(album.id) ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span>{album.year}</span>
                  <span className="mx-2">•</span>
                  <span>{album.format}</span>
                </div>

                {/* Price */}
                <div className="mt-3">
                  {album.originalPrice ? (
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-gray-900">
                        ${album.price}
                      </span>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${album.originalPrice}
                      </span>
                      {album.originalPrice && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                          {Math.round(
                            (1 - album.price / album.originalPrice) * 100
                          )}
                          % OFF
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-lg font-bold text-gray-900">
                      ${album.price}
                    </span>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="mt-4 flex justify-between">
                  <button className="flex-1 bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-800 transition">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumGrid;

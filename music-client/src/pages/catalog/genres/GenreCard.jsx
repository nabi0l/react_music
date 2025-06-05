import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import ccm from "../../../assets/images/genre/ccm.jpeg";
import gospel from "../../../assets/images/genre/gospel.jpeg";
import worship from "../../../assets/images/genre/worship.jpg";
import hymns from "../../../assets/images/genre/hymns.jpeg";
import rock from "../../../assets/images/genre/img2.jpg";
import pop from "../../../assets/images/genre/img.jpg";
import southern from "../../../assets/images/genre/img3.jpg";

const GenreCard = () => {
  const genres = [
    {
      name: "Gospel",
      image: gospel,
      description: "Powerful spirituals and contemporary praise",
    },
    {
      name: "Worship",
      image: worship,
      description: "Elevate your devotional experience",
    },
    {
      name: "CCM",
      image: ccm,
      description: "Modern Christian sounds for daily life",
    },
    {
      name: "Hymns",
      image: hymns,
      description: "Timeless truths in classic arrangements",
    },
    {
      name: "Christian Rock",
      image: rock,
      description: "Anointed alternative and rock",
    },
    {
      name: "Christian Pop",
      image: pop,
      description: "Uplifting melodies for everyday faith",
    },
    {
      name: "Southern Gospel",
      image: southern,
      description: "Harmony-rich traditional sounds",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(genres.length / cardsPerPage);

  const paginatedGenres = genres.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-justify mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-2">
            Browse <span className="font-semibold">by Genre</span>
          </h2>
          <p className="text-gray-600">
            Discover music that strengthens your faith
          </p>
        </div>

        {/* Paginated Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {paginatedGenres.map((genre, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-md group"
            >
              <img
                src={genre.image}
                alt={genre.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{genre.name}</h3>
                <p className="text-sm opacity-90 mb-4">{genre.description}</p>
                <button className="self-start text-sm font-medium bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full transition-all">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              } transition-colors`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GenreCard;

import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShoppingCart,
  FaRegClock,
} from "react-icons/fa";

import maverickWay from '../../../assets/images/albums/maverick way.jpg';
import peaceProject from '../../../assets/images/albums/peaceProject.jpg';
import graveGardens from '../../../assets/images/albums/grave.jpg';
import recklessLove from "../../../assets/images/albums/reckless.jpg";
import homeComing from "../../../assets/images/albums/Homecoming_-_Bethel_Music.jpg";

const NewRelease = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const newReleases = [
    {
      id: 1,
      cover: maverickWay,
      artist: "Maverick City Music",
      title: "The Maverick Way",
      releaseDate: "2023-12-01",
      price: 11.99,
      preOrder: true,
      grayscaleCover: "https://example.com/new1-bw.jpg", // B&W version
    },
    {
      id: 2,
      cover: peaceProject,
      artist: "Hillsong Worship",
      title: "Christmas: The Peace Project",
      releaseDate: "2023-11-15",
      price: 9.99,
      preOrder: true,
      grayscaleCover: "https://example.com/new2-bw.jpg",
    },
    {
      id: 3,
      cover: graveGardens,
      artist: "Elevation Worship",
      title: "Graves Into Gardens Deluxe",
      releaseDate: "2023-11-20",
      price: 14.99,
      grayscaleCover: "https://example.com/new3-bw.jpg",
    },
    {
      id: 4,
      cover: recklessLove,
      artist: "Cory Asbury",
      title: "Reckless Love: Live",
      releaseDate: "2023-12-05",
      price: 12.99,
      preOrder: true,
      grayscaleCover: "https://example.com/new4-bw.jpg",
    },
    {
      id: 5,
      cover: homeComing,
      artist: "Bethel Music",
      title: "Homecoming",
      releaseDate: "2023-11-10",
      price: 10.99,
      grayscaleCover: "https://example.com/new5-bw.jpg",
    },
  ];

  // Auto-advance every 5 seconds when not hovering
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === newReleases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? newReleases.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative py-12 bg-black text-white"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-light tracking-wider">NEW RELEASES</h2>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="relative h-96 overflow-hidden">
          {/* Carousel track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {newReleases.map((album, index) => (
              <div key={album.id} className="w-full flex-shrink-0 px-4">
                <div className="flex h-full">
                  {/* Album Art - Hover effect between color and B&W */}
                  <div className="w-1/2 relative overflow-hidden">
                  
                    <img
                      src={album.cover}
                      alt={`${album.title} cover`}
                      className={`w-full h-full object-cover transition-all duration-500 ${
      isHovering ? 'grayscale-0' : 'grayscale'
    }`}
                    />
                    {album.preOrder && (
                      <div className="absolute bottom-4 left-4 bg-white text-black px-3 py-1 text-sm font-medium tracking-wider">
                        PRE-ORDER
                      </div>
                    )}
                  </div>

                  {/* Album Info */}
                  <div className="w-1/2 pl-10 pr-4 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-4xl font-light mb-2 tracking-tight">
                        {album.title}
                      </h3>
                      <p className="text-xl text-gray-300">{album.artist}</p>
                    </div>

                    <div className="flex items-center space-x-4 mb-8">
                      <div className="flex items-center text-gray-400">
                        <FaRegClock className="mr-2" />
                        <span>
                          Release:{" "}
                          {new Date(album.releaseDate).toLocaleDateString(
                            "en-US",
                            { month: "long", day: "numeric", year: "numeric" }
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-light">${album.price}</p>
                        {album.preOrder && (
                          <p className="text-xs text-gray-400 mt-1">
                            Charged upon release
                          </p>
                        )}
                      </div>
                      <button className="flex items-center space-x-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                        <FaShoppingCart />
                        <span>
                          {album.preOrder ? "PRE-ORDER" : "ADD TO CART"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {newReleases.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white w-6" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;

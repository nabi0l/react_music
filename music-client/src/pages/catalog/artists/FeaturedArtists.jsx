import React, { useState, useEffect, useRef } from "react";

import sinach from '../../../assets/images/artists/sinach.jpg';
import mercy from '../../../assets/images/artists/mercy_chinwo.jpg';
import joe from '../../../assets/images/artists/joe mettle.jpg';
import nathaniel from "../../../assets/images/artists/nathaniel bassey.jpg";
import frank from '../../../assets/images/artists/Frank_Edwards_Frank_Edwards.jpg';
import hillsong from "../../../assets/images/artists/hillsong.jpg";

const ArtistCard = React.memo(({ artist }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex-shrink-0 px-2 w-[300px] py-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="relative pb-[100%] h-0">
          <img
            src={artist.image}
            alt={artist.name}
            onLoad={() => setLoaded(true)}
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              loaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/artist-placeholder.jpg";
            }}
          />
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 truncate">
            {artist.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2 truncate">
            {artist.description}
          </p>
          <a
            href={artist.profileLink}
            className="mt-3 inline-block w-full text-center bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
});

const FeaturedArtists = () => {
  const [allArtists, setAllArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Combined artist data
  const data = [
    {
      id: 1,
      name: "Sinach",
      image: sinach,
      description: "Nigerian worship leader",
      profileLink: "/artists/sinach",
      category: "African Gospel",
    },
    {
      id: 2,
      name: "Mercy Chinwo",
      image: mercy,
      description: "Nigerian gospel singer",
      profileLink: "/artists/mercy-chinwo",
      category: "African Gospel",
    },
    {
      id: 3,
      name: "Joe Mettle",
      image: joe,
      description: "Ghanaian gospel artist",
      profileLink: "/artists/joe-mettle",
      category: "African Gospel",
    },
    {
      id: 4,
      name: "Nathaniel Bassey",
      image: nathaniel,
      description: "Worship leader & trumpeter",
      profileLink: "/artists/nathaniel-bassey",
      category: "African Gospel",
    },
    {
      id: 5,
      name: "Frank Edwards",
      image: frank,
      description: "Nigerian gospel musician",
      profileLink: "/artists/frank-edwards",
      category: "African Gospel",
    },
    {
      id: 6,
      name: "Hillsong Worship",
      image:hillsong,
      description: "Australian worship team",
      profileLink: "/artists/hillsong-worship",
      category: "Uplifting Worship",
    },
    
  ];

  useEffect(() => {
    setAllArtists(data);
    setLoading(false);

    // Preload images
    data.forEach((artist) => {
      const img = new Image();
      img.src = artist.image;
    });
  }, []);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      setTimeout(checkScrollPosition, 300);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <section className="mt-12 px-4 md:px-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Featured Christian Artists
        </h2>
        <a
          href="/artists"
          className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center"
        >
          View all artists
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 top-1/2 transform -translate-y-1/2 -translate-x-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide py-2 space-x-4"
          style={{
            scrollSnapType: "x mandatory",
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          {loading
            ? [...Array(10)].map((_, i) => (
                <div key={i} className="flex-shrink-0 px-2 w-[200px]">
                  <div className="bg-gray-200 rounded-xl h-[350px] animate-pulse"></div>
                </div>
              ))
            : allArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 top-1/2 transform -translate-y-1/2 translate-x-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="text-center mt-2 text-gray-500 text-sm md:hidden">
        ← Scroll to see more →
      </div>
    </section>
  );
};

export default FeaturedArtists;

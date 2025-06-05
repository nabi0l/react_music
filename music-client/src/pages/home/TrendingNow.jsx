import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";
import {
  fetchTrendingTracks,
  fetchTrackPreview,
  addToCart,
  addToWishlist,
} from "../../services/api";

import "swiper/css";
import "swiper/css/navigation";

const TrendingNow = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [trendingTracks, setTrendingTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [audioPreview, setAudioPreview] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadTrendingTracks = async () => {
      try {
        const tracks = await fetchTrendingTracks();
        const formattedTracks = tracks.map((track) => ({
          id: `${track.name}-${track.artist.name}`,
          title: track.name,
          artist: track.artist.name,
          image: track.image,
          audioSrc: track.audioSrc || null,
          inCart: false,
          inWishlist: false,
        }));
        setTrendingTracks(formattedTracks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadTrendingTracks();
  }, []);

  const handlePlay = async (track) => {
    try {
      const preview = await fetchTrackPreview(track.artist, track.title);
      setAudioPreview(preview.url);
      setIsPlaying(true);
    } catch (error) {
      console.error("Error playing track:", error);
    }
  };

  const handleAddToCart = async (track) => {
    try {
      await addToCart(track.id);
      setTrendingTracks((tracks) =>
        tracks.map((t) => (t.id === track.id ? { ...t, inCart: true } : t))
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleAddToWishlist = async (track) => {
    try {
      await addToWishlist(track.id);
      setTrendingTracks((tracks) =>
        tracks.map((t) => (t.id === track.id ? { ...t, inWishlist: true } : t))
      );
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading trending tracks...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="mb-10 text-justify">
        <h2 className="text-4xl font-bold mb-3 text-black">Trending Now</h2>
        <p className="text-gray-600 text-lg">
          Handpicked gospel and worship tracks lighting up this week's charts.
        </p>
      </div>

      <div className="relative px-12">
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {trendingTracks.map((song) => (
            <SwiperSlide key={song.id}>
              <div
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full mb-8"
                onMouseEnter={() => setHoveredCard(song.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={song.image}
                    alt={song.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredCard === song.id
                        ? "scale-110 blur-sm"
                        : "scale-100 blur-0"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredCard === song.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      className="bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                      aria-label="Play track"
                      onClick={() => handlePlay(song)}
                    >
                      <FaPlay className="text-black text-lg ml-1" />
                    </button>
                    <button
                      className="bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                      aria-label="Add to cart"
                      onClick={() => handleAddToCart(song)}
                    >
                      <FaShoppingCart className="text-black text-lg" />
                    </button>
                    <button
                      className="bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                      aria-label="Add to wishlist"
                      onClick={() => handleAddToWishlist(song)}
                    >
                      <FaHeart
                        className={`text-lg ${
                          song.inWishlist ? "text-red-500" : "text-black"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black mb-1 truncate">
                    {song.title}
                  </h3>
                  <p className="text-gray-600 truncate">{song.artist}</p>
                  <div className="flex justify-between items-center mt-2">
                    {song.inCart && (
                      <span className="text-xs text-green-600">In Cart</span>
                    )}
                    {song.inWishlist && (
                      <span className="text-xs text-red-500">In Wishlist</span>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
          style={{ left: "20px" }}
          aria-label="Previous"
        >
          <FaChevronLeft className="text-black text-lg" />
        </button>
        <button
          className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
          style={{ right: "20px" }}
          aria-label="Next"
        >
          <FaChevronRight className="text-black text-lg" />
        </button>
      </div>

      {audioPreview && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg">
          <audio
            src={audioPreview}
            controls
            autoPlay
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      )}
    </div>
  );
};

export default TrendingNow;

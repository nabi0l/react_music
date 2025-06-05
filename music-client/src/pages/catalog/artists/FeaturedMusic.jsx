import React, { useState, useRef, useEffect } from "react";
import {
  FiPlay,
  FiPause,
  FiSkipBack,
  FiSkipForward,
  FiVolume2,
} from "react-icons/fi";
import { BsCartPlus, BsHeart, BsMusicNoteList } from "react-icons/bs";

const FeaturedMusic = () => {
  // Player state
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef(null);

  // Worship music catalog
  const featuredSongs = [
    {
      id: 1,
      title: "What A Beautiful Name",
      artist: "Hillsong Worship",
      album: "Let There Be Light",
      duration: 258,
      price: 1.29,
      lyrics:
        "You were the Word at the beginning...\nOne with God the Lord Most High...",
      audioSrc: "/music/beautiful-name.mp3",
      coverArt: "/covers/hillsong-worship.jpg",
      tags: ["Worship", "Communion"],
      featured: true,
    },
    {
      id: 2,
      title: "Way Maker",
      artist: "Sinach",
      album: "Way Maker",
      duration: 306,
      price: 1.49,
      lyrics:
        "You are here, moving in our midst...\nYou are here, working in this place...",
      audioSrc: "/music/way-maker.mp3",
      coverArt: "/covers/sinach.jpg",
      tags: ["Testimony", "Faith"],
      featured: true,
    },
    {
      id: 3,
      title: "Goodness of God",
      artist: "Bethel Music",
      album: "Victory",
      duration: 296,
      price: 1.39,
      lyrics: "I love You Lord...\nOh Your mercy never fails me...",
      audioSrc: "/music/goodness-of-god.mp3",
      coverArt: "/covers/bethel.jpg",
      tags: ["Thanksgiving", "Faithfulness"],
      featured: true,
    },
    {
      id: 4,
      title: "The Blessing",
      artist: "Elevation Worship",
      album: "Graves Into Gardens",
      duration: 378,
      price: 1.29,
      lyrics:
        "The Lord bless you and keep you...\nMake His face shine upon you...",
      audioSrc: "/music/blessing.mp3",
      coverArt: "/covers/elevation.jpg",
      tags: ["Benediction", "Family"],
      featured: true,
    },
    {
      id: 5,
      title: "O Come to the Altar",
      artist: "Elevation Worship",
      album: "Here As In Heaven",
      duration: 324,
      price: 1.19,
      lyrics: "Are you hurting and broken within?...\nO come to the altar...",
      audioSrc: "/music/altar.mp3",
      coverArt: "/covers/elevation-heaven.jpg",
      tags: ["Invitation", "Healing"],
      featured: true,
    },
  ];

  const currentSong = featuredSongs[currentSongIndex];

  // Player controls
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % featuredSongs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex(
      (prev) => (prev - 1 + featuredSongs.length) % featuredSongs.length
    );
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime =
      (e.nativeEvent.offsetX / e.target.offsetWidth) * currentSong.duration;
    audioRef.current.currentTime = seekTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Auto-play when song changes
  useEffect(() => {
    if (isPlaying) audioRef.current.play();
  }, [currentSongIndex]);

  return (
    <div className="container mx-auto py-12">
      {/* Featured Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Featured Worship Music
        </h2>
        <p className="text-gray-600">Top Christian songs for your spirit</p>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Songs List */}
          <div className="lg:w-2/5 border-r border-gray-200 bg-white bg-opacity-50 max-h-[600px] overflow-y-auto">
            <div className="p-4 sticky top-0 bg-gray-50 z-10">
              <h3 className="text-xl font-bold text-gray-900">Playlist</h3>
              <p className="text-sm text-gray-600">
                {featuredSongs.length} songs
              </p>
            </div>
            <ul>
              {featuredSongs.map((song, index) => (
                <li
                  key={song.id}
                  className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                    currentSongIndex === index ? "bg-gray-100" : ""
                  }`}
                  onClick={() => {
                    setCurrentSongIndex(index);
                    setIsPlaying(true);
                  }}
                >
                  <div className="flex items-center">
                    <img
                      src={song.coverArt}
                      alt={song.album}
                      className="w-12 h-12 rounded-md object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {song.title}
                      </h4>
                      <p className="text-sm text-gray-700">{song.artist}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {song.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        {formatTime(song.duration)}
                      </p>
                      <p className="text-gray-700 font-medium">${song.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Music Player */}
          <div className="lg:w-3/5 p-6">
            {/* Album Art and Song Info */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative group mb-6">
                <img
                  src={currentSong.coverArt}
                  alt={currentSong.album}
                  className="w-64 h-64 rounded-xl shadow-lg object-cover transform group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
                  >
                    {isPlaying ? (
                      <FiPause className="text-gray-900 text-xl" />
                    ) : (
                      <FiPlay className="text-gray-900 text-xl" />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {currentSong.title}
                </h3>
                <p className="text-gray-700">{currentSong.artist}</p>
                <p className="text-gray-500 text-sm">{currentSong.album}</p>
              </div>

              {/* Price and Add to Cart */}
              <div className="mt-6 flex gap-3">
                <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium flex items-center transition-colors">
                  <BsCartPlus className="mr-2" />${currentSong.price}
                </button>
                <button className="border border-gray-600 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-full font-medium flex items-center transition-colors">
                  <BsHeart className="mr-2" />
                  Save
                </button>
              </div>
            </div>

            {/* Player Controls */}
            <div>
              {/* Progress Bar */}
              <div className="mb-4">
                <div
                  className="h-2 bg-gray-200 rounded-full cursor-pointer"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-gray-800 rounded-full"
                    style={{
                      width: `${(currentTime / currentSong.duration) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(currentSong.duration)}</span>
                </div>
              </div>

              {/* Main Controls */}
              <div className="flex justify-center items-center space-x-8 my-6">
                <button
                  onClick={handlePrev}
                  className="text-gray-700 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FiSkipBack className="text-2xl" />
                </button>

                <button
                  onClick={togglePlay}
                  className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-800 transition-all"
                >
                  {isPlaying ? (
                    <FiPause className="text-2xl" />
                  ) : (
                    <FiPlay className="text-2xl" />
                  )}
                </button>

                <button
                  onClick={handleNext}
                  className="text-gray-700 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FiSkipForward className="text-2xl" />
                </button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center justify-center mb-6">
                <FiVolume2 className="text-gray-700 mr-3" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-40 accent-gray-800"
                />
              </div>

              {/* Lyrics Toggle */}
              <div className="flex justify-center">
                <button
                  onClick={() => setShowLyrics(!showLyrics)}
                  className="text-gray-700 hover:text-gray-900 font-medium flex items-center transition-colors"
                >
                  {showLyrics ? "Hide Lyrics" : "Show Lyrics"}
                  <BsMusicNoteList className="ml-2" />
                </button>
              </div>

              {/* Lyrics Display */}
              {showLyrics && (
                <div className="mt-6 p-4 bg-white bg-opacity-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Lyrics</h4>
                  <p className="whitespace-pre-line text-gray-700 italic">
                    {currentSong.lyrics}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentSong.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </div>
  );
};

export default FeaturedMusic;

import React from "react";

const ArtistHero = () => {
  const artist = {
    name: "Hillsong Worship",
    origin: "Sydney, Australia",
    genres: ["Worship", "Contemporary Christian"],
    bannerImage:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tagline: "Experience God's Presence Through Worship",
    verse: "Psalm 100:2 - 'Worship the Lord with gladness...'",
    followers: "2.4M Followers",
  };

  return (
    <div className="relative h-[600px] w-full bg-gray-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={artist.bannerImage}
          alt="Worship background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
          {/* Profile image */}
          <div className="relative w-56 h-56 rounded-full border-4 border-white/80 overflow-hidden shadow-xl">
            <img
              src={artist.profileImage}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 px-5 py-2 rounded-full mb-6 border border-white/20">
              <span className="h-3 w-3 bg-gray-400 rounded-full mr-2" />
              <span className="text-sm font-semibold text-white">
                LISTENING NOW
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {artist.name}
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 mb-8 text-white/90">
              <span className="flex items-center text-lg">
                <LocationIcon className="mr-2" />
                {artist.origin}
              </span>
              <span className="flex items-center text-lg">
                <MusicIcon className="mr-2" />
                {artist.genres.join(" • ")}
              </span>
              <span className="flex items-center text-lg">
                <UserIcon className="mr-2" />
                {artist.followers}
              </span>
            </div>

            {/* Bible verse card */}
            <div className="bg-white/10 rounded-xl p-6 mb-10 border border-white/20">
              <p className="italic text-xl md:text-2xl text-white mb-2">
                "{artist.tagline}"
              </p>
              <p className="text-lg text-white/80 font-serif">{artist.verse}</p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold flex items-center gap-3 hover:bg-gray-100 transition-colors">
                <PlayIcon className="h-5 w-5" />
                <span>Play Latest</span>
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold flex items-center gap-3 hover:bg-white/10 transition-colors">
                <HeartIcon className="h-5 w-5" />
                <span>Follow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Icon components
const LocationIcon = ({ className }) => (
  <svg
    className={`h-5 w-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const MusicIcon = ({ className }) => (
  <svg
    className={`h-5 w-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
    />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg
    className={`h-5 w-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const PlayIcon = ({ className }) => (
  <svg
    className={`h-5 w-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg
    className={`h-5 w-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export default ArtistHero;

import React from "react";

const MusicWithMeaning = () => {
  // Featured song data
  const featuredSong = {
    id: 1,
    title: "Through The Storm",
    artist: "Elevation Worship",
    lyricQuote: "I won't fear the battle, You won't fear the storm",
    story:
      "This song was written during a particularly difficult season for our worship team. One of our members was walking through a cancer diagnosis, and we found ourselves ministering to each other through music. The lyrics came from our collective realization that even in life's fiercest storms, God's presence remains constant. Since its release, we've received thousands of messages from people who found comfort in these words during their own trials - from parents of hospitalized children to frontline workers during the pandemic.",
    tags: ["faith in trials", "worship deeper"],
    duration: "4 min read",
  };

  // Secondary songs data
  const secondarySongs = [
    {
      id: 2,
      title: "Rescue",
      artist: "Lauren Daigle",
      lyricQuote:
        "I will send out an army to find you in the middle of the darkest night",
      story:
        "Inspired by letters from fans who experienced divine intervention in their darkest moments...",
    },
    {
      id: 3,
      title: "Way Maker",
      artist: "Sinach",
      lyricQuote: "Even when I don't see it, You're working",
      story:
        "Born from the songwriter's personal season of waiting for breakthrough...",
    },
    {
      id: 4,
      title: "Tremble",
      artist: "Mosaic MSC",
      lyricQuote: "Jesus, Jesus, You make the darkness tremble",
      story: "Written during a time of spiritual warfare in the church...",
    },
    {
      id: 5,
      title: "Another in the Fire",
      artist: "Hillsong UNITED",
      lyricQuote: "There was another in the fire standing next to me",
      story: "Based on the story of Shadrach, Meshach and Abednego...",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-3">
            Music With Meaning
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the powerful stories behind songs that have changed lives
          </p>
        </div>
        {/* Magazine Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Featured Story (Large Card) */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-200 relative">
              {/* Album cover placeholder - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-black/20 border-2 border-white/50 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                Featured Testimony
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {featuredSong.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs text-gray-500">
                  {featuredSong.duration}
                </span>
              </div>
              <h3 className="text-2xl font-serif mb-2">{featuredSong.title}</h3>
              <p className="text-gray-600 mb-4">{featuredSong.artist}</p>
              <blockquote className="italic text-gray-700 border-l-2 border-gray-300 pl-4 mb-6">
                "{featuredSong.lyricQuote}"
              </blockquote>
              <p className="text-gray-700 mb-6">
                {featuredSong.story.substring(0, 200)}...
              </p>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Listen Now
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors">
                  Full Story
                </button>
              </div>
            </div>
          </div>
          {/* Secondary Stories (Smaller Cards) */}
          {secondarySongs.map((song) => (
            <div
              key={song.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-32 bg-gray-100 relative">
                {/* Album cover placeholder - replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="w-16 h-16 rounded-full bg-black/20 border border-white/50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-0.5 rounded-full text-xs shadow-xs">
                  New Story
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-serif text-lg">{song.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{song.artist}</p>
                <p className="text-xs italic text-gray-700 line-clamp-2 mb-3">
                  "{song.lyricQuote}"
                </p>
                <button className="text-xs text-black hover:text-gray-700 flex items-center gap-1 transition-colors">
                  Read Story
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Full-width CTA */}
        <div className="mt-16 text-center">
          <p className="font-serif text-2xl text-gray-700 mb-6">
            "Music can heal what words cannot touch"
          </p>
          <button className="bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Explore All Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default MusicWithMeaning;

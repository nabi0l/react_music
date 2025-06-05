import React from "react";

const TopSongs = ({
  artistType = "worship team",
  artistName = "various artists",
}) => {
  // Sample data for different Christian artist types
  const worshipTeamSongs = [
    {
      id: 1,
      title: "What A Beautiful Name",
      artist: "Hillsong Worship",
      duration: "4:18",
      plays: "428M",
      price: "$1.29",
      format: "MP3",
      message: "Exalting the name of Jesus",
      tags: ["Communion", "Praise"],
      scripture: "Philippians 2:9-10",
    },
    {
      id: 2,
      title: "Cornerstone",
      artist: "Hillsong Worship",
      duration: "4:12",
      plays: "381M",
      price: "$1.29",
      format: "FLAC",
      message: "Christ our solid foundation",
      tags: ["Hymn"],
      scripture: "Ephesians 2:20",
    },
    {
      id: 3,
      title: "Goodness of God",
      artist: "Bethel Music",
      duration: "4:56",
      plays: "512M",
      price: "$1.49",
      format: "MP3",
      message: "God's faithfulness in all seasons",
      tags: ["Testimony"],
      scripture: "Psalm 23:6",
    },
    {
      id: 4,
      title: "Reckless Love",
      artist: "Bethel Music",
      duration: "5:23",
      plays: "487M",
      price: "$1.29",
      format: "MP3",
      message: "God's pursuing love",
      tags: ["Worship"],
      scripture: "Luke 15:4-7",
    },
    {
      id: 5,
      title: "Build My Life",
      artist: "Passion",
      duration: "4:58",
      plays: "356M",
      price: "$1.29",
      format: "MP3",
      message: "Surrendered worship",
      tags: ["Dedication"],
      scripture: "Matthew 7:24-25",
    },
  ];

  const soloArtistSongs = [
    {
      id: 1,
      title: "Way Maker",
      artist: "Sinach",
      duration: "5:06",
      plays: "687M",
      price: "$1.49",
      format: "WAV",
      message: "God's faithfulness in trials",
      tags: ["Testimony"],
      scripture: "Isaiah 43:19",
    },
    {
      id: 2,
      title: "Oceans (Where Feet May Fail)",
      artist: "Hillsong UNITED (Taya)",
      duration: "5:56",
      plays: "892M",
      price: "$1.29",
      format: "MP3",
      message: "Trusting God in uncertainty",
      tags: ["Faith"],
      scripture: "Matthew 14:29",
    },
    {
      id: 3,
      title: "No Longer Slaves",
      artist: "Jonathan David Helser",
      duration: "6:13",
      plays: "324M",
      price: "$1.29",
      format: "MP3",
      message: "Freedom from fear",
      tags: ["Deliverance"],
      scripture: "Romans 8:15",
    },
    {
      id: 4,
      title: "The Blessing",
      artist: "Kari Jobe",
      duration: "6:18",
      plays: "412M",
      price: "$1.49",
      format: "WAV",
      message: "Generational blessing",
      tags: ["Benediction"],
      scripture: "Numbers 6:24-26",
    },
    {
      id: 5,
      title: "Graves Into Gardens",
      artist: "Elevation Worship (Brandon Lake)",
      duration: "5:43",
      plays: "378M",
      price: "$1.29",
      format: "MP3",
      message: "God's resurrection power",
      tags: ["Testimony"],
      scripture: "Ezekiel 37:1-14",
    },
  ];

  const bandSongs = [
    {
      id: 1,
      title: "God's Not Dead",
      artist: "Newsboys",
      duration: "3:42",
      plays: "256M",
      price: "$1.29",
      format: "MP3",
      message: "Declaration of faith",
      tags: ["Anthem"],
      scripture: "Daniel 3:17-18",
    },
    {
      id: 2,
      title: "Who Am I",
      artist: "Casting Crowns",
      duration: "5:35",
      plays: "412M",
      price: "$1.29",
      format: "MP3",
      message: "Identity in Christ",
      tags: ["Assurance"],
      scripture: "Psalm 8:4",
    },
    {
      id: 3,
      title: "My Story",
      artist: "Big Daddy Weave",
      duration: "4:38",
      plays: "287M",
      price: "$1.29",
      format: "MP3",
      message: "Personal testimony",
      tags: ["Redemption"],
      scripture: "Revelation 12:11",
    },
    {
      id: 4,
      title: "Chain Breaker",
      artist: "Zach Williams",
      duration: "3:15",
      plays: "321M",
      price: "$1.29",
      format: "MP3",
      message: "Freedom in Christ",
      tags: ["Deliverance"],
      scripture: "John 8:36",
    },
    {
      id: 5,
      title: "Resurrecting",
      artist: "Elevation Worship",
      duration: "5:42",
      plays: "356M",
      price: "$1.49",
      format: "WAV",
      message: "Christ's victory over death",
      tags: ["Easter"],
      scripture: "1 Corinthians 15:20",
    },
  ];

  // Select the appropriate song list
  const songs =
    artistType === "worship team"
      ? worshipTeamSongs
      : artistType === "solo artist"
      ? soloArtistSongs
      : bandSongs;

  const getArtistTypeLabel = () => {
    switch (artistType) {
      case "worship team":
        return "Worship Team";
      case "solo artist":
        return "Solo Artist";
      case "band":
        return "Christian Band";
      default:
        return "Christian Artist";
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {artistName} - Top Worship Songs
          </h2>
          <div className="flex items-center mt-2">
            <span className="bg-gray-100 text-gray-800 text-xl font-medium px-2.5 py-0.5 rounded">
              {getArtistTypeLabel()}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              Based on global streaming and downloads
            </span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-100 p-4 text-sm font-medium text-gray-700">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Song Title</div>
            <div className="col-span-2">Duration</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Actions</div>
          </div>

          {songs.map((song, index) => (
            <div
              key={song.id}
              className="grid grid-cols-12 items-center p-4 border-b border-gray-200 hover:bg-gray-100/50"
            >
              <div className="col-span-1 text-gray-500 font-medium">
                {index + 1}
              </div>

              <div className="col-span-5">
                <div className="flex items-center">
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full mr-3 hover:bg-gray-200">
                    <PlayIcon />
                  </button>
                  <div>
                    <h3 className="font-medium text-gray-900">{song.title}</h3>
                    <p className="text-sm text-gray-600">{song.message}</p>
                    <div className="flex mt-1">
                      {song.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded mr-1"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-gray-500 ml-2">
                        {song.scripture}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <span className="text-gray-700">{song.duration}</span>
                <span className="block text-xs text-gray-500">
                  {song.plays} streams
                </span>
              </div>

              <div className="col-span-2">
                <span className="font-medium text-gray-900">{song.price}</span>
                <span className="block text-xs text-gray-500">
                  {song.format}
                </span>
              </div>

              <div className="col-span-2 flex justify-end space-x-2">
                <button
                  className="p-2 text-gray-500 hover:text-gray-900"
                  title="Add to cart"
                >
                  <CartIcon />
                </button>
                <button
                  className="p-2 text-gray-500 hover:text-gray-900"
                  title="Download"
                >
                  <DownloadIcon />
                </button>
                <button
                  className="p-2 text-gray-500 hover:text-gray-900"
                  title="Add to playlist"
                >
                  <PlaylistIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            All purchases include unlimited streaming. Sheet music available for
            select tracks.
          </p>
          <button className="px-6 py-2 bg-black hover:bg-gray-800 text-white rounded-lg">
            View Full Discography
          </button>
        </div>
      </div>
    </section>
  );
};

// Icons
const PlayIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const PlaylistIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

export default TopSongs;

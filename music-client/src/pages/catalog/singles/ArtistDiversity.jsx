import React from "react";
import {
  FaMicrophone,
  FaChurch,
  FaUserFriends,
  FaGlobeAmericas,
} from "react-icons/fa";

const ArtistsDiversity = () => {
  // Sample artist data representing diversity
  const artistCategories = [
    {
      id: 1,
      title: "Solo Worship Leaders",
      description: "Powerful voices carrying the message through song",
      icon: <FaMicrophone className="text-3xl mb-4" />,
      artists: [
        { name: "Tauren Wells", genre: "Contemporary" },
        { name: "Lauren Daigle", genre: "CCM" },
        { name: "Chris Tomlin", genre: "Worship" },
      ],
    },
    {
      id: 2,
      title: "Gospel Choirs",
      description: "Soul-stirring harmonies from diverse communities",
      icon: <FaUserFriends className="text-3xl mb-4" />,
      artists: [
        { name: "Brooklyn Tabernacle Choir", genre: "Traditional Gospel" },
        { name: "CeCe Winans", genre: "Urban Gospel" },
        { name: "Mississippi Mass Choir", genre: "Southern Gospel" },
      ],
    },
    {
      id: 3,
      title: "International Artists",
      description: "Global expressions of faith through music",
      icon: <FaGlobeAmericas className="text-3xl mb-4" />,
      artists: [
        { name: "Hillsong Global", genre: "International Worship" },
        { name: "Guatemala Worship", genre: "Latin Christian" },
        { name: "Soweto Gospel Choir", genre: "African Gospel" },
      ],
    },
    {
      id: 4,
      title: "Worship Teams",
      description: "United voices leading congregations worldwide",
      icon: <FaChurch className="text-3xl mb-4" />,
      artists: [
        { name: "Elevation Worship", genre: "Modern Worship" },
        { name: "Bethel Music", genre: "Spiritual Worship" },
        { name: "Maverick City Music", genre: "Diverse Worship" },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Celebrating Diverse Voices of Faith
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the rich tapestry of Christian artists from different
            backgrounds, traditions, and worship styles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artistCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.artists.map((artist, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-medium">{artist.name}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {artist.genre}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full py-2 border border-black text-black font-medium rounded hover:bg-black hover:text-white transition-colors">
                Explore {category.title}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            Our Commitment to Diversity
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We believe worship music should reflect the beautiful diversity of
            Christ's body. Our collection intentionally features artists from
            different ethnicities, denominations, and musical traditions to
            enrich your spiritual journey.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
            View All Artists
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistsDiversity;

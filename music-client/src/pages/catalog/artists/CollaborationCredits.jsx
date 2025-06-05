import React from "react";

const CollaborationCredits = () => {
  // Sample data structure - replace with your actual data
  const collaborations = [
    {
      id: 1,
      name: "Chris Tomlin",
      role: "Featured Artist",
      image: "/artists/chris-tomlin.jpg",
      profileLink: "/artists/chris-tomlin",
      relatedSongs: [
        {
          id: 101,
          title: "Amazing Grace (My Chains Are Gone)",
          link: "/song/101",
        },
        { id: 102, title: "How Great Is Our God", link: "/song/102" },
      ],
    },
    {
      id: 2,
      name: "Kari Jobe",
      role: "Co-writer",
      image: "/artists/kari-jobe.jpg",
      profileLink: "/artists/kari-jobe",
      relatedSongs: [
        { id: 103, title: "Forever", link: "/song/103" },
        { id: 104, title: "The Blessing", link: "/song/104" },
      ],
    },
    {
      id: 3,
      name: "Matt Redman",
      role: "Producer",
      image: "/artists/matt-redman.jpg",
      profileLink: "/artists/matt-redman",
      relatedSongs: [
        { id: 105, title: "10,000 Reasons", link: "/song/105" },
        { id: 106, title: "Better Is One Day", link: "/song/106" },
      ],
    },
  ];

  return (
    <section className="py-12 bg-gray-50 rounded-xl container mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 px-4">
        Collaboration Credits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {collaborations.map((collab) => (
          <div
            key={collab.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="flex p-4">
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  src={collab.image}
                  alt={collab.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/artist-placeholder.jpg";
                  }}
                />
              </div>
              <div className="ml-4">
                <a
                  href={collab.profileLink}
                  className="text-lg font-semibold text-gray-900 hover:underline"
                >
                  {collab.name}
                </a>
                <p className="text-sm text-gray-600">{collab.role}</p>
              </div>
            </div>

            <div className="px-4 pb-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                Related Songs:
              </h4>
              <ul className="space-y-2">
                {collab.relatedSongs.map((song) => (
                  <li key={song.id}>
                    <a
                      href={song.link}
                      className="text-sm text-gray-700 hover:text-gray-900 hover:underline flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-gray-400"
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
                      {song.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 pb-4">
              <a
                href={collab.profileLink}
                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                View full profile
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
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium">
          View All Collaborations
        </button>
      </div>
    </section>
  );
};

export default CollaborationCredits;

import React from "react";
import { ArrowRight } from "react-feather";
import {
  FaFire,
  FaTwitter,
  FaInstagram,
  FaHashtag,
  FaHeart,
  FaRetweet,
  FaComment,
} from "react-icons/fa";

const TrendingTopics = () => {
  // Sample data
  const trendingTopics = [
    {
      id: 1,
      hashtag: "#GospelHits2025",
      description:
        "The hottest gospel tracks this week featuring @EthanGrace and @HannahLight",
      media: "/gospel-collab.jpg",
      platform: "twitter",
      time: "2h ago",
      isRising: true,
      postCount: 12500,
      engagement: {
        likes: 3200,
        retweets: 1500,
        comments: 420,
      },
    },
    {
      id: 2,
      hashtag: "#WorshipChallenge",
      description:
        "Singers are putting their spin on this viral worship chorus! Join the challenge 🎶",
      media: "/worship-challenge.jpg",
      platform: "instagram",
      time: "5h ago",
      isRising: false,
      postCount: 8700,
      engagement: {
        likes: 5400,
        comments: 320,
      },
    },
    {
      id: 3,
      hashtag: "#RisingAfrobeat",
      description:
        "Christian Afrobeat artists you need to know this season! 🔊",
      media: "/afrobeat-artist.jpg",
      platform: "twitter",
      time: "1d ago",
      isRising: true,
      postCount: 9800,
      engagement: {
        likes: 4100,
        retweets: 2300,
        comments: 580,
      },
    },
    {
      id: 4,
      hashtag: "#SundayVibes",
      description:
        "How worship leaders are preparing for Sunday service across the globe 🌍",
      media: "/sunday-vibes.jpg",
      platform: "instagram",
      time: "8h ago",
      isRising: false,
      postCount: 6500,
      engagement: {
        likes: 3800,
        comments: 290,
      },
    },
  ];

  return (
    <div className="py-12 container mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center">
          <FaFire className="text-orange-500 mr-2" size={18} />
          Trending in Worship
        </h2>
        <div className="flex space-x-3">
          <button className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm">
            <FaTwitter className="mr-1.5 text-blue-400" size={14} />
            Twitter
          </button>
          <button className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm">
            <FaInstagram className="mr-1.5 text-pink-500" size={14} />
            Instagram
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingTopics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md p-4 border border-gray-100 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                {topic.platform === "twitter" ? (
                  <FaTwitter className="text-blue-400 mr-2" size={16} />
                ) : (
                  <FaInstagram className="text-pink-500 mr-2" size={16} />
                )}
                <span className="text-sm font-medium text-gray-600">
                  {topic.platform.charAt(0).toUpperCase() +
                    topic.platform.slice(1)}
                </span>
              </div>
              {topic.isRising && (
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full flex items-center">
                  <FaFire className="mr-1 text-orange-500" size={10} />
                  Rising
                </span>
              )}
            </div>

            <div className="mb-3">
              <h3 className="text-base font-bold text-gray-900 flex items-center">
                <FaHashtag className="mr-1 text-gray-600" size={12} />
                {topic.hashtag}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {topic.postCount.toLocaleString()} posts
              </p>
            </div>

            <div className="flex items-center space-x-3 text-xs text-gray-500 mb-4">
              {topic.platform === "twitter" ? (
                <>
                  <div className="flex items-center">
                    <FaHeart className="mr-1" size={12} />
                    {topic.engagement.likes.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <FaRetweet className="mr-1" size={12} />
                    {topic.engagement.retweets.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <FaComment className="mr-1" size={12} />
                    {topic.engagement.comments.toLocaleString()}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <FaHeart className="mr-1" size={12} />
                    {topic.engagement.likes.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <FaComment className="mr-1" size={12} />
                    {topic.engagement.comments.toLocaleString()}
                  </div>
                </>
              )}
            </div>

            <button className="w-full py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm">
              View Posts
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;

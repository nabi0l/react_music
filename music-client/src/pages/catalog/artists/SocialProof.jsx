import React from "react";

const SocialProof = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-6xl mx-auto my-8">
      {/* Customer Reviews */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          What Fans Say
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-inner">
            <p className="text-gray-700">
              "Absolutely inspiring! His music touches my soul every time."
            </p>
            <div className="mt-2 flex items-center">
              <span className="text-yellow-400">★★★★☆</span>
              <span className="ml-2 text-sm text-gray-600">4.5/5</span>
            </div>
          </div>
          {/* Add more reviews as needed */}
        </div>
      </section>

      {/* Popularity Metrics */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Popularity</h2>
        <div className="flex space-x-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">1M+</p>
            <p className="text-gray-600 text-sm">Streams</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">50K</p>
            <p className="text-gray-600 text-sm">Followers</p>
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Featured In
        </h2>
        <div className="flex space-x-4 items-center">
          {/* Replace with actual media logos or links */}
          <img src="media-logo1.png" alt="Media 1" className="h-8" />
          <img src="media-logo2.png" alt="Media 2" className="h-8" />
        </div>
      </section>
    </div>
  );
};

export default SocialProof;

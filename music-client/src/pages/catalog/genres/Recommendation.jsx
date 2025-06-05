import React from "react";

const Recommendation = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Recommended For You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="https://via./placeholder.com/300"
            alt="album cover"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Album Title</h3>
          <p className="text-gray-600">Artist Name</p>
          <p className="text-gray-500">Genre</p>
          <p className="text-gray-500">Release Date</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="https://via./placeholder.com/300"
            alt="album cover"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Album Title</h3>
          <p className="text-gray-600">Artist Name</p>
          <p className="text-gray-500">Genre</p>
          <p className="text-gray-500">Release Date</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="https://via./placeholder.com/300"
            alt="album cover"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Album Title</h3>
          <p className="text-gray-600">Artist Name</p>
          <p className="text-gray-500">Genre</p>
          <p className="text-gray-500">Release Date</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="https://via./placeholder.com/300"
            alt="album cover"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Album Title</h3>
          <p className="text-gray-600">Artist Name</p>
          <p className="text-gray-500">Genre</p>
          <p className="text-gray-500">Release Date</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

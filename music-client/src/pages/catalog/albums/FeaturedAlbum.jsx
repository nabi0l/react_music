import React from "react";
import {
  
  FaStar,
  
} from "react-icons/fa";

import citizenHeaven from '../../../assets/images/albums/Citizen_of_Heaven_by_Tauren_Wells_(Official_Album_Cover).png';
import people from "../../../assets/images/albums/Hillsong_United_-_People.png";
import holyForever from '../../../assets/images/albums/holyForever.jpg';

const FeaturedAlbum = () => {

  const staffPicks = [
    {
      id: 1,
      cover: citizenHeaven,
      artist: "Tauren Wells",
      title: "Citizen of Heaven",
      price: 9.99,
      blurb: "2023 remaster with 2 bonus tracks!",
      staffer: "Sarah J., Worship Director",
    },
    {
      id: 2,
      cover: people,
      artist: "Hillsong UNITED",
      title: "People (Live)",
      price: 12.99,
      blurb: "Crisp live recordings from their global tour",
      staffer: "Mark T., Audio Engineer",
    },
    {
      id: 3,
      cover: holyForever,
      artist: "Chris Tomlin",
      title: "Holy Forever (Vinyl)",
      price: 24.99,
      blurb: "180g vinyl with stunning dynamic range",
      staffer: "David L., Vinyl Collector",
    },
  ];


  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        

        {/* Staff Picks */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Staff Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staffPicks.map((pick) => (
              <div
                key={pick.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={pick.cover}
                    alt={`${pick.title} cover`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded flex items-center">
                    <FaStar className="mr-1" /> PICK
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{pick.title}</h3>
                  <p className="text-gray-600 text-sm">{pick.artist}</p>
                  <p className="mt-2 text-sm italic text-gray-700">
                    "{pick.blurb}"
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      — {pick.staffer}
                    </span>
                    <button className="bg-black text-white px-3 py-1 rounded-full text-sm hover:bg-gray-800 transition">
                      ${pick.price}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default FeaturedAlbum;

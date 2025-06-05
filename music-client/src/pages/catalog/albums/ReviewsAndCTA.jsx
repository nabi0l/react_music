import React from "react";
import { FaQuoteLeft, FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";

const ReviewsAndCTA = () => {
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Worship Leader",
      rating: 5,
      comment:
        "The sound quality on these vinyl pressings is exceptional. My congregation loves when we incorporate these tracks into our services.",
      avatar: "/avatars/sarah.jpg",
    },
    {
      id: 2,
      name: "Daniel T.",
      role: "Small Group Leader",
      rating: 4,
      comment:
        "Instant download made it easy to get the music immediately while waiting for the physical copy to arrive. Perfect for our Bible study group.",
      avatar: "/avatars/daniel.jpg",
    },
    {
      id: 3,
      name: "Emily R.",
      role: "Youth Pastor",
      rating: 5,
      comment:
        "The lyrics are so powerful and the production quality is top-notch. Our youth group plays these songs on repeat!",
      avatar: "/avatars/emily.jpg",
    },
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <FaStar key={i} className="text-yellow-400" />
          ) : (
            <FaRegStar key={i} className="text-gray-300" />
          )
        )}
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Reviews Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-light tracking-wider text-center mb-12">
            FAITHFUL LISTENERS SPEAK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>

                <FaQuoteLeft className="text-gray-300 mb-3" />
                <p className="text-gray-700 italic mb-6">"{review.comment}"</p>
                <div className="border-t border-gray-100 pt-4 text-sm text-gray-500">
                  Verified Purchase
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              <h2 className="text-3xl font-light tracking-wider mb-4">
                YOUR WORSHIP JOURNEY STARTS HERE
              </h2>
              <p className="text-gray-300 mb-8 max-w-lg">
                Join thousands of churches and individuals who've transformed
                their worship experience with our curated collection of
                Christ-centered music.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center justify-center hover:bg-gray-100 transition-all">
                  <span>Shop New Releases</span>
                  <FaArrowRight className="ml-2" />
                </button>
                <button className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all">
                  Explore Worship Resources
                </button>
              </div>
            </div>
            <div
              className="bg-gray-900 bg-cover bg-center hidden lg:block"
              style={{ backgroundImage: "url('/images/worship-cta.jpg')" }}
            >
              {/* This space intentionally left blank for background image */}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">10K+</div>
            <div className="text-sm text-gray-500">Albums Sold</div>
          </div>
          <div className="h-12 border-r border-gray-200 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-sm text-gray-500">Satisfaction Guarantee</div>
          </div>
          <div className="h-12 border-r border-gray-200 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-sm text-gray-500">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsAndCTA;

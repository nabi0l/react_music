import React from "react";

const EmbeddedVideos = () => {
  return (
    <section className="container mx-auto px-4 py-12 ">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Social Media & Videos
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Watch videos, browse latest posts, and stay connected through your
          favorite platforms.
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* YouTube Video */}
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition duration-300 ease-in-out">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* TikTok Video */}
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition duration-300 ease-in-out">
          <div className="aspect-w-9 aspect-h-16">
            <iframe
              className="w-full h-full"
              src="https://www.tiktok.com/embed/VIDEO_ID"
              title="TikTok Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Feed Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Latest from Instagram & Facebook
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Instagram Feed Embed (using third-party widget or static images as placeholders) */}
          <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Replace with your embedded widget or images */}
            <iframe
              src="https://lightwidget.com/widgets/YOUR_WIDGET_ID.html"
              className="w-full h-64"
              title="Instagram Feed"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </div>
          {/* Facebook Feed Placeholder / Embed */}
          <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center bg-gray-50">
            <p className="text-gray-600 text-center px-4">
              Facebook feed widget or posts here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmbeddedVideos;

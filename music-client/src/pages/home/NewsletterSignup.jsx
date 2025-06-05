import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      {/* Container with soft shadow */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg shadow-gray-200 overflow-hidden">
        {/* Decorative accent at top */}
        <div className="h-2 bg-gradient-to-r from-gray-700 to-black"></div>
        <div className="p-8 md:p-12">
          {/* Header with black text */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-3">
              Stay Inspired
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join our community and receive monthly stories behind meaningful
              music
            </p>
          </div>
          {/* Signup Form */}
          <div className="mb-8">
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 outline-none transition-all placeholder-gray-300"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-black hover:bg-gray-800 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
            {/* Privacy Note */}
            <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          {/* Social Links with optional label */}
          <div className="text-center border-t border-gray-100 pt-8">
            <p className="text-sm text-gray-600 mb-4 font-medium">
              FOLLOW OUR JOURNEY
            </p>
            <div className="flex justify-center gap-5">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-5 h-5 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-5 h-5 text-[#E4405F]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06-4.123 0-.205-.007-.509-.022-.889l-.003-.078.005-.05.008-.052.01-.054.015-.055.02-.054.025-.053.03-.05.036-.05.043-.048.05-.043.054-.04.056-.032.054-.03.052-.024.05-.02.055-.016.054-.01.052-.008.05-.005.078-.003.089-.022c.38-.015.683-.022.888-.022v.002c1.585 0 1.925-.01 2.962-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.05-1.04.058-1.38.058-2.845v-.65c0-1.465-.008-1.806-.058-2.845-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.037-.05-1.377-.058-2.845-.058h-.65zm-8.488 8a4.5 4.5 0 104.5 4.5 4.5 4.5 0 00-4.5-4.5zm4.5 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4.5-1.5a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-5 h-5 text-[#1DA1F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-5 h-5 text-[#FF0000]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

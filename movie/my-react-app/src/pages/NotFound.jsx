import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="text-center px-6 py-12 max-w-lg mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 mb-4">
            404
          </h1>
          <div className="w-32 h-1 bg-linear-to-r from-purple-400 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The page you're looking for seems to have wandered off into the
            digital void. Don't worry, even the best explorers sometimes take a
            wrong turn!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <AiOutlineHome size={20} />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <span>Go Back</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 opacity-30">
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

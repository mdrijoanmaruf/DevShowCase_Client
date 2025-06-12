import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa'

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FaExclamationTriangle className="text-yellow-400 text-4xl md:text-6xl opacity-80 animate-bounce" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best developers get lost sometimes!
          </p>
        </div>

        {/* Illustration/Graphics */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-spin-slow">
              <FaSearch className="text-white text-4xl" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-ping">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-400/25 transform hover:scale-105"
          >
            <FaHome className="text-lg" />
            <span>Go Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-medium transform hover:scale-105"
          >
            <span>← Go Back</span>
          </button>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">
            Did you know?
          </h3>
          <p className="text-gray-300 text-sm">
            The term "404" comes from the room number at CERN where the first web server was located. 
            When a file couldn't be found, it was a "404" error!
          </p>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-pink-400 rounded-full animate-float-delayed opacity-30"></div>
      </div>
    </div>
  )
}

export default PageNotFound
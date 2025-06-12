import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaGithub,
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext";

const Register = () => {
  const { createUser, signInWithGoogle , signInWithGithub} = use(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    createUser(formData.email, formData.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-in clicked");
    signInWithGoogle()
      .then((result) => {
        console.log("Google Sign-in successful:", result.user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  const handleGithubSignIn = () => {
    console.log("GitHub Sign-in clicked");
    signInWithGithub()
      .then((result) => {
        console.log("GitHub Sign-in successful:", result.user);
      })
      .catch((error) => {
        console.error("Error signing in with GitHub:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Branding */}
          <div className="md:w-2/5 bg-gradient-to-br from-blue-800 to-purple-800 p-8 flex flex-col justify-center items-center text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-3xl">D</span>
              </div>
              <h1 className="text-4xl font-bold text-white mt-4">
                Dev<span className="text-cyan-400">ShowCase</span>
              </h1>
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-xs">
              Join our community of innovative developers showcasing
              cutting-edge projects
            </p>
            <div className="hidden md:block space-y-4 w-full max-w-xs">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center space-x-3 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium"
              >
                <FaGoogle className="text-red-500" />
                <span>Sign up with Google</span>
              </button>

              <button
                onClick={handleGithubSignIn}
                className="w-full flex items-center justify-center space-x-3 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium"
              >
                <FaGithub />
                <span>Sign up with GitHub</span>
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-3/5 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form Fields Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              {/* Form Fields Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Photo URL Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">
                    Photo URL <span className="text-gray-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <FaImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="url"
                      name="photoUrl"
                      value={formData.photoUrl}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-400/25 transform hover:scale-[1.02]"
              >
                Create Account
              </button>
            </form>

            {/* Social Buttons (Mobile Only) */}
            <div className="md:hidden space-y-3 mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center space-x-3 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium"
              >
                <FaGoogle className="text-red-500" />
                <span>Sign up with Google</span>
              </button>

              <button
                onClick={handleGithubSignIn}
                className="w-full flex items-center justify-center space-x-3 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium"
              >
                <FaGithub />
                <span>Sign up with GitHub</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
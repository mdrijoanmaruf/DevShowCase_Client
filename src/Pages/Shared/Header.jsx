import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from 'sweetalert2'; // Import SweetAlert2

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#38bdf8', // Cyan/blue color matching your theme
      cancelButtonColor: '#ef4444', // Red color for cancel
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Log out clicked");
        signOutUser()
          .then(() => {
            console.log("User logged out successfully");
            Swal.fire({
              title: 'Logged Out!',
              text: 'You have been successfully logged out.',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            });
          })
          .catch((error) => {
            console.error("Error logging out:", error);
            Swal.fire({
              title: 'Error',
              text: 'Failed to logout. Please try again.',
              icon: 'error'
            });
          });
      }
    });
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Dev<span className="text-cyan-400">ShowCase</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Auth Buttons or User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-cyan-400"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {user.displayName
                          ? user.displayName.charAt(0).toUpperCase()
                          : user.email.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span className="text-white font-medium hidden lg:inline">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-white border border-red-400 rounded-lg hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="px-4 py-2 text-white border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-medium">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-400/25">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-2"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="pt-4 pb-2 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 px-4 pt-2">
              {user ? (
                <>
                  {/* User info for mobile */}
                  <div className="flex items-center space-x-2 py-2">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="User"
                        className="w-8 h-8 rounded-full border-2 border-cyan-400"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {user.displayName
                            ? user.displayName.charAt(0).toUpperCase()
                            : user.email.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <span className="text-white font-medium truncate">
                      {user.displayName || user.email}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="py-2 text-white border border-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full py-2 text-white border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-medium">
                      Login
                    </button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

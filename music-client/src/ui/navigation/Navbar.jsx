import {
  FaMusic,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from "react-icons/fa";
import { NavLink, useMatch } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { user, signOut } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const { cart } = useCart();

  // Track active routes for navigation highlighting
  const isAlbumsActive = useMatch("/catalog/albums/*");
  const isSinglesActive = useMatch("/catalog/singles/*");
  const isPlaylistsActive = useMatch("/catalog/playlists/*");

  const isMusicActive = isAlbumsActive || isSinglesActive || isPlaylistsActive;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsMusicOpen(false);
      setIsUserDropdownOpen(false);
    }
  };

  const toggleMusic = () => {
    setIsMusicOpen(!isMusicOpen);
    setIsUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsMusicOpen(false);
  };

  const handleLogout = async () => {
    await signOut();
    setIsUserDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Handle search functionality
    setIsMenuOpen(false); // Close mobile menu after search
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaMusic className="text-2xl text-black" />
            <h1 className="text-2xl font-bold text-black">TuneDownloader</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center">
            <ul className="flex items-center space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-black transition ${
                      isActive ? "text-black font-medium" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/catalog/artists"
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-black transition ${
                      isActive ? "text-black font-medium" : ""
                    }`
                  }
                >
                  Artists
                </NavLink>
              </li>

              <li className="relative">
                <div className="flex items-center">
                  <span
                    className={`text-gray-600 hover:text-black transition ${
                      isMusicActive ? "text-black font-medium" : ""
                    }`}
                  >
                    Music
                  </span>
                  <button
                    onClick={toggleMusic}
                    className="ml-1 focus:outline-none"
                  >
                    {isMusicOpen ? (
                      <FaChevronUp className="text-sm" />
                    ) : (
                      <FaChevronDown className="text-sm" />
                    )}
                  </button>
                </div>
                {isMusicOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <NavLink
                      to="/catalog/albums"
                      onClick={() => setIsMusicOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black ${
                          isActive ? "bg-gray-50 text-black" : ""
                        }`
                      }
                    >
                      Albums
                    </NavLink>
                    <NavLink
                      to="/catalog/singles"
                      onClick={() => setIsMusicOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black ${
                          isActive ? "bg-gray-50 text-black" : ""
                        }`
                      }
                    >
                      Singles
                    </NavLink>
                    <NavLink
                      to="/catalog/playlists"
                      onClick={() => setIsMusicOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black ${
                          isActive ? "bg-gray-50 text-black" : ""
                        }`
                      }
                    >
                      Playlists
                    </NavLink>
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-black transition ${
                      isActive ? "text-black font-medium" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Desktop Search and Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search music, artists..."
                className="px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm w-40 lg:w-56"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
              >
                <FaSearch />
              </button>
            </form>

            {/* Cart with badge */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-gray-600 hover:text-black transition text-xl relative ${
                  isActive ? "text-black" : ""
                }`
              }
            >
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </NavLink>

            {/* User dropdown with login/signup options */}
            <div className="relative">
              <button
                onClick={toggleUserDropdown}
                className="text-gray-600 hover:text-black transition text-xl"
              >
                <FaUser />
              </button>
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {user ? (
                    <>
                      <NavLink
                        to="/account"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black"
                      >
                        My Account
                      </NavLink>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-red-600"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/login"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/signup"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black"
                      >
                        Sign Up
                      </NavLink>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4 px-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search music, artists..."
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                >
                  <FaSearch />
                </button>
              </div>
            </form>

            <nav>
              <ul className="flex flex-col space-y-3 px-2">
                <li>
                  <NavLink
                    to="/"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block py-2 text-gray-600 hover:text-black ${
                        isActive ? "text-black font-medium" : ""
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/catalog/artists"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block py-2 text-gray-600 hover:text-black ${
                        isActive ? "text-black font-medium" : ""
                      }`
                    }
                  >
                    Artists
                  </NavLink>
                </li>

                <li>
                  <button
                    onClick={toggleMusic}
                    className="flex items-center w-full py-2 text-gray-600 hover:text-black"
                  >
                    Music
                    {isMusicOpen ? (
                      <FaChevronUp className="ml-1 text-sm" />
                    ) : (
                      <FaChevronDown className="ml-1 text-sm" />
                    )}
                  </button>
                  {isMusicOpen && (
                    <div className="pl-4 mt-1 space-y-2">
                      <NavLink
                        to="/catalog/albums"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          `block py-1 text-gray-600 hover:text-black ${
                            isActive ? "text-black font-medium" : ""
                          }`
                        }
                      >
                        Albums
                      </NavLink>
                      <NavLink
                        to="/catalog/singles"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          `block py-1 text-gray-600 hover:text-black ${
                            isActive ? "text-black font-medium" : ""
                          }`
                        }
                      >
                        Singles
                      </NavLink>
                      <NavLink
                        to="/catalog/playlists"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          `block py-1 text-gray-600 hover:text-black ${
                            isActive ? "text-black font-medium" : ""
                          }`
                        }
                      >
                        Playlists
                      </NavLink>
                    </div>
                  )}
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block py-2 text-gray-600 hover:text-black ${
                        isActive ? "text-black font-medium" : ""
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>

                <li className="flex items-center justify-between pt-4 border-t border-gray-200 mt-2">
                  <NavLink
                    to="/cart"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-gray-600 hover:text-black text-xl relative ${
                        isActive ? "text-black" : ""
                      }`
                    }
                  >
                    <FaShoppingCart />
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </NavLink>

                  <li className="mt-4">
                    <div className="flex flex-col space-y-2">
                      {user ? (
                        <>
                          <NavLink
                            to="/account"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                              `block py-2 px-4 text-gray-600 hover:bg-gray-50 hover:text-black rounded ${
                                isActive ? "bg-gray-50 text-black font-medium" : ""
                              }`
                            }
                          >
                            My Account
                          </NavLink>
                          <button
                            onClick={() => {
                              handleLogout();
                              toggleMenu();
                            }}
                            className="block w-full text-left py-2 px-4 text-gray-600 hover:bg-gray-50 hover:text-red-600 rounded"
                          >
                            Logout
                          </button>
                        </>
                      ) : (
                        <>
                          <NavLink
                            to="/login"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                              `block py-2 px-4 text-gray-600 hover:bg-gray-50 hover:text-black rounded ${
                                isActive ? "bg-gray-50 text-black font-medium" : ""
                              }`
                            }
                          >
                            Login
                          </NavLink>
                          <NavLink
                            to="/signup"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                              `block py-2 px-4 text-center bg-black text-white rounded hover:bg-gray-800 transition ${
                                isActive ? "bg-gray-800" : ""
                              }`
                            }
                          >
                            Sign Up
                          </NavLink>
                        </>
                      )}
                    </div>
                  </li>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

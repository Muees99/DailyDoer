import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    navigate("/");
  };

  const handleAddTaskClick = () => {
    setIsMenuOpen(false);
    navigate("/add");
  };

  const clickHandler = () => {
    navigate("/");
  };

  const handleSearchClick = () => {
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <nav className="w-full md:h-[8rem] md:flex md:flex-row md:justify-center md:items-center md:relative">
      {/* Part 1: Heading and Burger Menu (Visible on mobile screens only) */}
      <div className="md:hidden flex items-center w-full p-2">
        <h1
          className="text-xl font-bold text-gray-600 mb-2 pl-2"
          onClick={clickHandler}
        >
          DailyDoer
        </h1>
        {/* Burger menu icon */}
        <div
          className="text-gray-600 cursor-pointer ml-auto pr-1"
          onClick={handleMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 transition-transform"
            style={{
              transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>
      </div>

      {/* Part 2: Search Bar and Button (Visible on all screens) */}
      <div className="flex flex-row justify-center items-center w-full">
        {/* Search bar */}
        <input
          type="text"
          id="search"
          placeholder="Search for tasks..."
          className="w-[15rem] md:w-[20rem] h-[2.5rem] md:h-[2.5rem] border border-gray-400 shadow-md rounded-md bg-transparent px-2"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Search button */}
        <button
          className="border border-gray-400 shadow-md px-2 h-[2.5rem] rounded-md ml-1 md:ml-2"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>

      {/* Mobile Menu Popup */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[4rem] right-0 bottom-0 left-0  bg-opacity-50 flex justify-end">
          <div className="bg-slate-100 border border-gray-300 shadow-md py-2 px-4 rounded-md max-h-[5rem] overflow-y-auto">
            <button
              className="block w-full text-center text-lg text-slate-600 mb-3"
              onClick={handleHomeClick}
            >
              Home
            </button>
            <button
              className="block w-full text-center text-lg text-slate-600 mb-3"
              onClick={handleAddTaskClick}
            >
              Task+
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

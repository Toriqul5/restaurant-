import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const searchData = [
  { name: "Kakune restau, Paris", icon: "🍽️" },
  { name: "Kakunexy delux, Rome", icon: "🍽️" },
  { name: "Kakune, New York", icon: "🍽️" },
  { name: "Kikune, Dakar Plateau", icon: "🍽️" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredResults = searchData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setShowDropdown(false);
  };

  const handleSelect = (item) => {
    setQuery(item.name);
    setShowDropdown(false);
    // Use window.location to navigate
    window.location.href = "/best"; // Directly change the page
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 bg-white shadow-sm">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          className="flex-grow px-2 outline-none"
          placeholder="restaurant, hotel, service...."
          value={query}
          onChange={handleSearch}
        />
        {query && (
          <button onClick={clearSearch} className="ml-2 text-gray-500">
            <FaTimes />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-sm z-10">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(item)} // Call handleSelect on item click
              >
                <span>{item.icon}</span>
                <p className="text-gray-700">{item.name}</p>
              </div>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
}

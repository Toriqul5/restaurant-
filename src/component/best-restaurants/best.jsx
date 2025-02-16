import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@heroui/react";
import { FaStar, FaTimes } from "react-icons/fa";

const restaurants = [
  {
    name: "The Snug",
    p: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.5,
    reviews: 456,
    image: "best1.png",
  },
  {
    name: "Bottega",
    p: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.3,
    reviews: 324,
    image: "best2.png",
  },
  {
    name: "Little Shucker",
    p: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.6,
    reviews: 210,
    image: "best3.png",
  },
  {
    name: "Lokma",
    p: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.4,
    reviews: 398,
    image: "best4.png",
  },
  {
    name: "Starbelly",
    p: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.4,
    reviews: 398,
    image: "best4.png",
  },
  {
    name: "Te Melt",
    p: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.4,
    reviews: 398,
    image: "best4.png",
  },
  {
    name: "Arabia Nights",
    p: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.4,
    reviews: 398,
    image: "best4.png",
  },
];

const MyCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/last-page');
  };

  return (
    <div className="flex flex-col sm:flex-row p-4 max-w-6xl mx-auto gap-8">
      {/* Left Side - Restaurant List */}
      <div className="w-full sm:w-2/3">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h5 className="text-gray-600 text-sm">Home / All restaurants</h5>
            <h1 className="text-2xl font-bold">Best Restaurants in Singapore</h1>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="flex items-center text-gray-700 px-4 py-2 border border-gray-700 rounded-full"
            >
              <img src="small.png" alt="" className="w-4 h-4 mr-2" />
              <span>Sort</span>
            </button>
            {showPopup && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-bold text-blue-500">Sort Options</span>
                  <FaTimes className="cursor-pointer" onClick={() => setShowPopup(false)} />
                </div>
                <div className="mt-2 space-y-2">
                  <p className="text-gray-600 cursor-pointer">Highest rated</p>
                  <p className="text-gray-600 cursor-pointer">Oldest rated</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Restaurant List */}
        <div className="space-y-4">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg p-4 flex gap-4 items-center w-full shadow-md">
              <img src={restaurant.image} alt={restaurant.name} className="w-32 h-32 rounded-lg object-cover" />
              <div>
                <h3 className="text-lg font-bold">{restaurant.name}</h3>
                <p className="text-gray-600 text-sm w-[200px] md:w-[280px] h-[57px]">{restaurant.p}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(restaurant.rating) ? "text-yellow-500" : "text-gray-300"} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  {restaurant.rating} ({restaurant.reviews} reviews)
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <Button color="primary" radius="full" className="mt-4 px-4 py-2 text-white w-full sm:w-auto" onClick={handleClick}>
          Show More
        </Button>
      </div>

      {/* Right Side - Map */}
      <div className="w-full sm:w-1/3">
        <img src="map.png" alt="Map of Singapore" className="w-full h-[850px] object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default MyCard;

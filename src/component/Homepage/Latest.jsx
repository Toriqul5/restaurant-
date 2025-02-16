import React from "react";
import {Button} from "@heroui/react";

const cardData = [
  {
    image: "card1.png",
    title: "Bella Italia",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.8,
    reviews: 34,
  },
  {
    image: "card2.png",
    title: "Little Shucker",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 52,
  },
  {
    image: "card3.png",
    title: "Marafuku Ramen",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 3.8,
    reviews: 45,
  },
  {
    image: "card4.png",
    title: "Bottega",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 40,
  },
  {
    image: "card5.png",
    title: "Arabia Nights",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 3.5,
    reviews: 28,
  },
  {
    image: "card6.png",
    title: "Lokma",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 60,
  },
  {
    image: "card7.png",
    title: "The snug",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.5,
    reviews: 33,
  },
  {
    image: "card8.png",
    title: "Starbelly",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 41,
  },
  {
    image: "card9.png",
    title: "Starbelly",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 3.5,
    reviews: 39,
  },
  {
    image: "card10.png",
    title: "Ngalley",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 50,
  },
  {
    image: "card11.png",
    title: "diogonal",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.5,
    reviews: 44,
  },
  {
    image: "card12.png",
    title: "Kitoko",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 37,
  },
];

const CardList = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-start mb-6">
        Top Rated Restaurants
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-black font-semibold text-lg">{card.title}</h3>
              <p className="text-[#8F8F8F] font-semibold text-[13px] text-sm mt-1">
               {card.des}
              </p>
              <div className="flex items-center mt-3">
                <span className=" text-white">⭐⭐⭐⭐⭐⭐</span>
                <p className="text-black text-lg ml-2">{card.rating}</p>
                <span className="text-gray-400 text-[10px] ml-2">
                  ({card.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}

       
      </div>
      <div className="flex flex-col justify-center items-center">
          <p className=" mt-12 mb-6 font-semibold text-[#1E1E1E] text-[22px]">Discover more cool restaurants</p>
          <Button color="primary" radius="full"> See more</Button>
        </div>
    </div>
  );
};

export default CardList;

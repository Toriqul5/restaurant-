import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const carouselData = [
  {
    image: "eat1.png",
    title: "Bottega",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: "5.0",
    reviews: "876",
  },
  {
    image: "eat2.png",
    title: "Bottega",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: "5.0",
    reviews: "876",
  },
  {
    image: "eat3.png",
    title: "Bottega",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: "5.0",
    reviews: "876",
  },
  {
    image: "eat4.png",
    title: "Bottega",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: "5.0",
    reviews: "876",
  },
  {
    image: "eat2.png",
    title: "Bottega",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: "5.0",
    reviews: "876",
  },
  {
    image: "eat1.png",
    title: "Bottega",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: "5.0",
    reviews: "876",
  },
  {
    image: "eat3.png",
    title: "Bottega",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: "5.0",
    reviews: "876",
  },
  {
    image: "eat4.png",
    title: "Bottega",
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: "5.0",
    reviews: "876",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(carouselData.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="p-6 bg-[#1677BD] rounded-xl">
      <h1 className="text-white lg:text-[30px] text-[18px] font-semibold pb-5 text-start">
        Find the best restaurant ratings below
      </h1>

      <div className="relative max-w-screen-xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-4"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselData.map((item, index) => (
            <div key={index} className="md:w-1/4  flex flex-shrink-0  ">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[285px] h-[370px] ">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[#232323] font-bold text-[19px]">
                    {item.title}
                  </h3>
                  <p className="text-[#8F8F8F] w-[200px] mb-4 h-[48px] text-[12px]">
                    {item.des}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400 text-lg">
                      <img src="star.png" alt="" />
                    </div>
                    <p className="text-black text-lg ml-2">{item.rating}</p>
                    <span className="text-[#7A7A7A] text-[13px] ml-2">
                      ({item.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <FaArrowLeft className="text-black text-xl" />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <FaArrowRight className="text-black text-xl" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#FFFFFF]" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;

import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe, FaClock, FaStar } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

export default function RestaurantPage() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const images = [
    "photo1.png",
    "photo2.png",
    "photo3.png",
    "photo4.png",
    "photo5.png",
  ];

  const Siam = [
    "photo5.png",
    "photo5.png",
    "photo5.png",
    "photo5.png",
    "photo5.png",
    "photo5.png",
  ];

  return (
    <div className="font-sans bg-white">
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('bg-img.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 md:p-12 text-white">
          <h1 className="text-4xl font-bold">Bella Italia</h1>
          <div className="flex items-center mt-2 text-lg">
            <FaStar className="text-yellow-400" />
            <span className="ml-2">5.0 (834 reviews)</span>
          </div>
          <p className="mt-2  text-sm md:text-lg max-w-lg">
            The lorem ipsum is in printing, a series of meaningless words used temporarily to calibrate a layout.
          </p>
          <div className="flex items-center mt-4 text-sm md:text-base">
            <FaMapMarkerAlt />
            <span className="ml-2">Singapore, Bishan-Ang Mo Kio Park</span>
          </div>
          <div className="flex items-center mt-2 text-sm md:text-base">
            <FaClock />
            <span className="ml-2">7/7, 08:00 - 22:00</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[-30px]">
        <div className="bg-white p-4 rounded-full shadow-lg">
          <img src="logo2.png" alt="Bella Italia Logo" className="h-20 w-20" />
        </div>
      </div>

      <section className="py-10 px-6 md:px-12 md:ml-24">
        <h2 className="text-2xl md:text-3xl font-bold">Discover our magnificent place in photos</h2>
        <p className="text-gray-600 mt-2 lg:w-[601px] w-[355px]">
        The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.
        </p>

        <div className="md:flex gap-4 mt-6">
          <div>
            <img className="rounded-lg w-[595px] h-[420px] object-cover mb-4" src="photo1.png" alt="Interior 1" />
          </div>
          <div className="flex gap-4">
            <div>
              <img className="rounded-lg mb-4 h-[200px] w-[250px] object-cover" src="photo2.png" alt="Interior 2" />
              <img className="rounded-lg h-[200px] w-[250px] object-cover" src="photo3.png" alt="Interior 3" />
            </div>
            <div>
              <img className="rounded-lg mb-4 h-[200px] w-[250px] object-cover" src="photo4.png" alt="Interior 4" />
              <img className="rounded-lg h-[200px] w-[250px] object-cover" src="photo5.png" alt="Interior 5" />
            </div>
          </div>
        </div>
        <button
          onClick={openPopup}
          className="mt-6 flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 mx-auto"
        >
          <IoMdPhotos className="mr-2" /> View all photos (7)
        </button>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <img src="pop1.png" alt="" className="pb-3 w-[900px] h-[400px]" />
            <div className="flex w-[1000px] h-[100px] gap-4 gap-x-6">
              {Siam.map((img, index) => (
                <img key={index} src={img} alt={`Photo ${index + 1}`} className="rounded-lg w-[100px] h-[120px]" />
              ))}
            </div>
            <button
              onClick={closePopup}
              className="bg-red-500 outline top-0 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

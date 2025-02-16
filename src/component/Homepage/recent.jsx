import { useState } from "react";
import { FaUser, FaArrowRight } from "react-icons/fa";

const data = [
    {
        id: 1,
        name: "Leslie Sakho",
        location: "Canada, Toronto",
        date: "09/11/2023",
        text: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        images: ["pic1.png", "pic2.png", "pic3.png"]
    },
    {
        id: 2,
        name: "Chris Macari",
        location: "Singapore",
        date: "10/12/2023",
        text: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        des: "The lorem ipsum is, in printing.",
        images: ["pic4.png", "pic5.png", "pic6.png"]
    },
    {
        id: 3,
        name: "Jojo Alba",
        location: "Kuala Lumpur",
        date: "11/01/2024",
        text: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        images: ["pic7.png", "pic8.png", "pic3.png"]
    }
];

function Recent() {
    const [index, setIndex] = useState(0);
    const totalSlides = data.length;

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="p-4 relative">
            <h1 className="text-[33px] pb-2 font-bold text-start">Recent Activities</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.map((item) => (
                    <div key={item.id} className="p-4 border rounded-lg shadow-lg bg-white">
                        <div className="flex items-center gap-3">
                            <FaUser className="text-gray-600 text-lg" />
                            <div>
                                <p className="font-semibold text-lg">{item.name}</p>
                                <h5 className="text-sm text-gray-500">{item.location}</h5>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2 pb-2">
                            <img src="star.png" alt="Rating" className="" />
                            <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                        <p className="text-sm text-gray-600 leading-6 line-clamp-3">{item.text}</p>
                        <p className="text-sm text-gray-500 pt-2 leading-6 line-clamp-3">{item.des}</p>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            {item.images.map((img, idx) => (
                                <img key={idx} src={img} alt="Preview" className="w-[100px] h-[100px] rounded-md object-cover" />
                            ))}
                        </div>
                        <h4 className="text-blue-600 mt-3 cursor-pointer hover:underline">Discover</h4>
                    </div>
                ))}
            </div>

            {/* Right Button */}
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
                <FaArrowRight className="text-black text-xl" />
            </button>
        </section>
    );
}

export default Recent;

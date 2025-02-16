import React, { useState } from 'react';
import { Button } from "@heroui/react";
import { FaFilter, FaSort } from 'react-icons/fa';

const reviews = [
    {
        img: "man.png",
        name: "Wei Jie",
        location: "Singapore, Little India",
        date: "29/11/2023",
        rating: 5,
        content: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
        img: "man.png",
        name: "Mei Ling",
        location: "Singapore, Orchard Boulevard",
        date: "05/05/2023",
        rating: 5,
        content: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
        img: "man.png",
        name: "Wei Jie",
        location: "Singapore, Little India",
        date: "29/11/2023",
        rating: 5,
        content: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
        img: "man.png",
        name: "Wei Jie",
        location: "Singapore, Little India",
        date: "29/11/2023",
        rating: 5,
        content: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
        img: "man.png",
        name: "Wei Jie",
        location: "Singapore, Little India",
        date: "29/11/2023",
        rating: 5,
        content: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
        img: "man.png",
        name: "Wei Jie",
        location: "Singapore, Little India",
        date: "29/11/2023",
        rating: 5,
        content: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
        img: "man.png",
        name: "Wei Jie",
        location: "Singapore, Little India",
        date: "29/11/2023",
        rating: 5,
        content: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
        img: "man.png",
        name: "Wei Jie",
        location: "Singapore, Little India",
        date: "29/11/2023",
        rating: 5,
        content: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
        img: "man.png",
        name: "Wei Jie",
        location: "Singapore, Little India",
        date: "29/11/2023",
        rating: 5,
        content: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
];

const Reviews = () => {
    const [isSortOpen, setSortOpen] = useState(false);
    const [isFilterOpen, setFilterOpen] = useState(false);

    return (
        <div className="p-4 md:ml-[138px] md:mr-10">
            {/* Filter and Sort Buttons */}
            <div className="flex justify-between mb-4">
                <div className="flex items-center">
                    <button 
                        className="flex items-center bg-gray-200 p-2 rounded-md mr-2"
                        onClick={() => setFilterOpen(true)}
                    >
                        <FaFilter className="mr-1" /> Filter
                    </button>
                    <button 
                        className="flex items-center bg-gray-200 p-2 rounded-md" 
                        onClick={() => setSortOpen(true)}
                    >
                        <FaSort className="mr-1" /> Sort
                    </button>
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
                {reviews.map((review, index) => (
                    <div key={index} className="p-4 border-b flex">
                        <div className='pr-3'>
                            <img src={review.img} alt={review.name} className='p-4 bg-slate-200 rounded-full object-cover' />
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">{review.name}</h2>
                            <p className="text-gray-600">{review.location} - {review.date}</p>
                            <div className="my-2">
                                {'⭐'.repeat(review.rating)}{' '}{'☆'.repeat(5 - review.rating)}
                            </div>
                            <p className="text-gray-800 md:w-[511px] md:h-[55px] mb-4">{review.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More Reviews Button */}
            <div>
                <Button color='primary' radius='full' className='flex items-center pl-8 pr-8 mt-10'>
                    Show more reviews
                </Button>
            </div>

            {/* Sort Popup Modal */}
            {isSortOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
                        <div className="space-y-2">
                            <button className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-200">All feedbacks</button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Highest rated</button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Oldest rated</button>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded-full" 
                                onClick={() => setSortOpen(false)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Filter Popup Modal */}
            {isFilterOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
                        <h3 className="font-bold text-lg mb-4">filter by rating</h3>
                        <div className="space-y-2">
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200"> <img src="star6.png" alt="" /></button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200"> <img src="star2.png" alt="" /></button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200"> <img src="star3.png" alt="" /></button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200"> <img src="star4.png" alt="" /></button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200"> <img src="star7.png" alt="" /></button>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded-full" 
                                onClick={() => setFilterOpen(false)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reviews;

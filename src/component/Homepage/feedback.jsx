import { Button } from "@heroui/react";
import React from "react";

function FeedBack() {
    return (
        <section className="p-6 sm:px-8 md:px-10 bg-[#F2F2F2]">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left side */}
                <div className="lg:w-1/2 sm:w-full text-center lg:text-left">
                    <div>
                        <h2 className="text-[#1E1E1E] text-[16px] lg:text-[26px] font-bold w-[350px] lg:w-[502px] h-[132px]">
                            MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business
                        </h2>
                        <p className="text-[#5E5E5E] text-[10px] lg:text-[14px] pb-6 lg:w-[460px] w-[300px]">
                            The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                        </p>
                        <Button radius="full" className="bg-[#1E1E1E] text-white mt-4">
                            Explore MyFeedback business
                        </Button>
                    </div>
                </div>
                {/* Right side */}
                <div className="lg:w-1/2 sm:w-full mt-6 lg:mt-0 flex justify-center">
                    <img src="one.png" alt="business resources" className="max-w-full h-auto" />
                </div>
            </div>
        </section>
    );
}

export default FeedBack;

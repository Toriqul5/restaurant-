import { useState } from "react";
import SearchBar from "./searchbar";


     
export default function Navbar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="flex items-center justify-between bg-white p-2 shadow-sm">
     
      <div className="">
        <img src="logo.png" alt="" className="w-29 h-8" />
      </div>
 <div className="w-[380px] lg:flex hidden  border rounded-full">
    {/* Search Input */}
    <SearchBar/>

 </div>
      
      <div className=" flex justify-end ">
        <img src="web.png" alt="" />
      <button className="ml-3 bg-gray-800 text-[10px] text-white px-4 py-1 rounded-full">
        MyFeedback for Business
      </button>
      </div>
    </div>
  );
}

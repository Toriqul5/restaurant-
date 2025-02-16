import React from "react";
import SmallImg from "./SmallImg";
import Carousel from "./Carousel";
import CardList from "./Latest";
import FeedBack from "./feedback";
import Recent from "./recent";

function Homepage (){
    return(
        <>
        <SmallImg/>
        <Carousel/> 
       <CardList/>
       <FeedBack/>
       <Recent/>  
       
        </>
    )
}
export default Homepage;
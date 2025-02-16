import React from "react";
import RestaurantPage from "./bella";
import RestaurantMap from "./restaurantmap";
import RatingComponent from "./rating";
import Reviews from "./last-card";
import MoreInfo from "./more";

function LastPage() {
  return (
    <>
      <RestaurantPage />
      <MoreInfo />
      <RatingComponent />
      <Reviews />
      <RestaurantMap />
    </>
  );
}

export default LastPage;

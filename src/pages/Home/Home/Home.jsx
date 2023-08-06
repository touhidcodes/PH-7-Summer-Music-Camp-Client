import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import OurValues from "../OurValues/OurValues";
import Welcome from "../WelcomeHome/WelcomeHome";
import Newsletter from "../Newsletter/Newsletter";
import FindMore from "../FindMore/FindMore";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <PopularClass />
      <PopularInstructors />
      <FindMore />
      <Review />
      <OurValues />
      <Newsletter />
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import OurValues from "../OurValues/OurValues";
import Welcome from "../Welcome/Welcome";
import Newsletter from "../Newsletter/Newsletter";
import FindMore from "../FindMore/FindMore";

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <PopularClass />
      <PopularInstructors />
      <FindMore />
      <OurValues />
      <Newsletter />
    </div>
  );
};

export default Home;

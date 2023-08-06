import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import OurValues from "../OurValues/OurValues";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <PopularClass />
      <PopularInstructors />
      <OurValues />
    </div>
  );
};

export default Home;

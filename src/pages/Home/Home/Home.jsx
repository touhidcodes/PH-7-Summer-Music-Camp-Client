import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import OurValues from "../OurValues/OurValues";

const Home = () => {
	return (
		<div>
			<Banner />
			<PopularClass />
			<PopularInstructors />
			<OurValues />
		</div>
	);
};

export default Home;

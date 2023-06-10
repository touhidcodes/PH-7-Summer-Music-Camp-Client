import React from "react";
import ValueCard from "../../../components/ValueCard/ValueCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OurValues = () => {
	return (
		<div className='mt-16'>
			<SectionTitle
				heading={"Our Care Values"}
				subheading={"We Care Your Child"}
			/>
			<div className='grid grid-cols-1 lg:grid-cols-4 gap-10 mt-40'>
				<ValueCard title={"Learning & Fun"} bg={"bg-green-500 rounded-xl"} />
				<ValueCard title={"Healthy Meals"} bg={"bg-yellow-500  rounded-xl"} />
				<ValueCard title={"Children Safety"} bg={"bg-purple-400 rounded-xl"} />
				<ValueCard title={"Cute Environment"} bg={"bg-sky-400 rounded-xl"} />
			</div>
		</div>
	);
};

export default OurValues;

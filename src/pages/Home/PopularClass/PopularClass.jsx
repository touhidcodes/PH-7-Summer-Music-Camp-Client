import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import ItemsCard from "../../../components/ItemsCard/ItemsCard";

const PopularClass = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get("http://localhost:5000/home/classes").then((data) => {
			// console.log(data.data);
			setItems(data.data);
			setLoading(false);
		});
	}, []);

	return (
		<div className='bg-base-200 py-10 mt-10 rounded-xl'>
			<SectionTitle
				heading={"Popular Classes"}
				subheading={"Our Popular Summer Classes"}
			/>
			{loading && "loading"}
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mx-10'>
				{items.map((item) => (
					<ItemsCard
						key={item._id}
						title={item.class_name}
						image={item.image}
					/>
				))}
			</div>
		</div>
	);
};

export default PopularClass;

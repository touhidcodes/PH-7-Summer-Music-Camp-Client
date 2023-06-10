import React, { useEffect, useState } from "react";
import axiosBase from "../../hooks/useAxios/UseAxios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Loading from "../../../components/Loading/Loading";
import ItemsCard from "../../../components/ItemsCard/ItemsCard";

const PopularInstructors = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axiosBase.get("home/instructors").then((data) => {
			setItems(data.data);
			setLoading(false);
		});
	}, []);
	return (
		<div className='bg-base-200 py-10 mt-10 rounded-xl'>
			<SectionTitle
				heading={"Popular Instructors"}
				subheading={"Our Popular Instructors"}
			/>
			{loading && <Loading loading={loading} />}
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mx-3 lg:mx-10'>
				{items.map((item) => (
					<ItemsCard
						key={item._id}
						id={item._id}
						type={"instructor"}
						title={item.instructor_name}
						image={item.image_url}
						email={item.email}
						name={item.class_name}
						enrolled={item.students_enrolled}
						taken={item.classes_taken}
						btnInfo={"View Details"}
					/>
				))}
			</div>
		</div>
	);
};

export default PopularInstructors;

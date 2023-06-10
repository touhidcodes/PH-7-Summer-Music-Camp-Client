import React, { useEffect, useState } from "react";
import axiosBase from "../../hooks/useAxios/axiosBase";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemsCard from "../../../components/ItemsCard/ItemsCard";
import Loading from "../../../components/Loading/Loading";

const AllClasses = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axiosBase.get("classes").then((data) => {
			setData(data.data);
			setLoading(false);
		});
	}, []);

	return (
		<div className='mt-10'>
			<SectionTitle heading={"Our Classes"} subheading={"See All Classes"} />
			{loading && <Loading loading={loading} />}
			<div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 mx-3 lg:mx-0'>
				{data.map((item) => (
					<ItemsCard
						key={item._id}
						id={item._id}
						type={"class"}
						title={item.class_name}
						image={item.image}
						name={item.instructor_name}
						enrolled={item.enrolled}
						seats={item.available_seats}
						btnInfo={"Join Class"}
					/>
				))}
			</div>
		</div>
	);
};

export default AllClasses;

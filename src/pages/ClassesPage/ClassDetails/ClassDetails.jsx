import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axiosBase from "../../hooks/useAxios/UseAxios";

const ClassDetails = () => {
	const params = useParams();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axiosBase.get(`classes/${params.id}`).then((data) => setData(data.data[0]));
		setLoading(false);
	}, []);

	return (
		<div className='bg-base-200 py-10 rounded-xl'>
			{loading && <Loading loading={loading} />}
			<SectionTitle
				heading={data?.class_name}
				subheading={"View Details About this Class"}
			/>
			<div className='lg:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 card-body'>
				<img src={data.image} alt='' className='rounded-xl' />
				<div className='space-y-3 text-xl'>
					<h2 className='card-title mb-2 text-4xl text-purple-900'>
						{data.class_name}
					</h2>
					<p className='font-semibold'>
						<span>Instructor Name: </span>
						<span className='text-purple-900'>{data.instructor_name}</span>
					</p>
					<p className='font-semibold'>
						<span>Enrolled Students: </span>
						<span className='text-purple-900'>{data.enrolled}</span>
					</p>
					<p className='font-semibold'>
						<span>Total Seats: </span>
						<span className='text-purple-900'>{data.total_seats}</span>
					</p>

					<p className='font-semibold'>
						<span>Available Seats: </span>
						<span className='text-purple-900'>{data.available_seats}</span>
					</p>
					<p className='font-semibold'>
						<span>Price: </span>
						<span className='text-purple-900'>$ {data.price}</span>
					</p>
					<div className='card-actions justify-start'>
						<button className='btn btn-error text-white mt-5'>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClassDetails;

import React from "react";
import { Link } from "react-router-dom";

const ItemsCard = ({
	type,
	id,
	image,
	title,
	name,
	enrolled,
	seats,
	btnInfo,
	email,
	taken,
}) => {
	return (
		<div className='card  bg-base-100 shadow-xl'>
			<div className={seats === 0 && "bg-red-200 rounded-xl overflow-hidden"}>
				<figure>
					<img src={image} alt='Music Instruments' className='rounded-t-xl' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title mb-2 text-purple-900'>{title}</h2>
					{type === "class" && (
						<>
							<p className='font-semibold'>
								<span>Instructor Name: </span>
								<span className='text-purple-900'>{name}</span>
							</p>
							<p className='font-semibold'>
								<span>Enrolled Students: </span>
								<span className='text-purple-900'>{enrolled}</span>
							</p>
							<p className='font-semibold'>
								<span>Available Seats: </span>
								<span className='text-purple-900'>{seats}</span>
							</p>
						</>
					)}
					{type === "instructor" && (
						<>
							<p className='font-semibold'>
								<span>Class Name: </span>
								<span className='text-purple-900'>{name}</span>
							</p>
							<p className='font-semibold'>
								<span>Student Enrolled: </span>
								<span className='text-purple-900'>{enrolled}</span>
							</p>
							<p className='font-semibold'>
								<span>Classes Taken: </span>
								<span className='text-purple-900'>{taken}</span>
							</p>
							<p className='font-semibold'>
								<span>Email: </span>
								<span className='text-purple-900'>{email}</span>
							</p>
						</>
					)}
					<div className='card-actions justify-center mt-5'>
						<Link
							to={
								(seats !== 0 && type === "class" && `/classes/${id}`) ||
								(type === "instructor" && `/instructors/${id}`)
							}
						>
							<button
								className={
									seats === 0
										? " btn btn-disabled text-black"
										: "btn btn-error text-white"
								}
							>
								{btnInfo}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemsCard;

import React from "react";
import { Link } from "react-router-dom";

const ItemsCard = ({ id,image, title, name, enrolled,seats }) => {
	return (
		<div className='card  bg-base-100 shadow-xl'>
			<figure>
				<img src={image} alt='Music Instruments' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title mb-2'>{title}</h2>
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
				<div className='card-actions justify-center mt-5'>
					<Link to={`/classes/${id}`}> 
						<button className='btn btn-error text-white'>View Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ItemsCard;

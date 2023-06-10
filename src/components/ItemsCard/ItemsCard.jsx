import React from "react";

const ItemsCard = ({image, title}) => {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<img
					src={image}
					alt='Music Instruments'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default ItemsCard;

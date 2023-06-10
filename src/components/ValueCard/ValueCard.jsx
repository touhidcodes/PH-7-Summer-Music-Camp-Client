import React from "react";
import image from "../../assets/images/banner/image3.jpg";

const ValueCard = ({ title, bg }) => {
	return (
		<div className='relative '>
			<div className={bg}>
				<div className='card shadow-xl '>
					<div className='card-body text-center mt-10 text-white'>
						<h2 className='text-2xl text-center font-bold'>{title}</h2>
						<p className='text-xl'>
							Prissy expectant involuntarily limpet until cobra less dear so
							overabundant contagio
						</p>
					</div>
				</div>
				<div className='flex justify-center absolute -top-20 right-16'>
					<img
						src={image}
						alt=''
						className='rounded-full h-36 w-36 opacity-90 '
					/>
				</div>
			</div>
		</div>
	);
};

export default ValueCard;

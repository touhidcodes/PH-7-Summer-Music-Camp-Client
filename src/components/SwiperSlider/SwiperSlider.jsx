import React from "react";

const SwiperSlider = ({image, instrument}) => {
	return (
		<div>
			<div className='relative'>
				<img src={image} alt='' className='opacity-80' />
			</div>
			<div className='absolute top-24 lg:top-28 left-10 lg:left-32 my-auto bg-purple-400 lg:px-20 p-1 lg:py-20 bg-opacity-60 rounded-xl '>
				<div className='flex items-center lg:divide-x-4'>
					<div className='flex flex-col items-center justify-center font-bold text-xl text-white  lg:text-6xl lg:space-y-3 lg:pr-16 pr-5'>
						<h2>Summer</h2> <h2 className='text-purple-900'>Music Camp</h2>
					</div>
					<div className='text-xl lg:text-5xl font-semibold flex flex-col items-center lg:space-y-3 lg:pl-16'>
						<h2 className='text-purple-900 '>Learn Music with</h2>
						<h2 className='text-white'>{instrument}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SwiperSlider;

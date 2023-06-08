import React from "react";

const SwiperSlider = ({image, instrument}) => {
	return (
		<div>
			<div className='relative'>
				<img src={image} alt='' className='opacity-80' />
			</div>
			<div className='absolute top-28 left-36 my-auto bg-purple-400 px-20 py-20 bg-opacity-60 rounded-xl '>
				<div className='flex items-center gap-28'>
					<div className='flex flex-col items-center justify-center font-bold text-white text-sm lg:text-6xl space-y-3'>
						<h2>Summer</h2> <h2 className='text-purple-900'>Music Camp</h2>
					</div>
					<div className='text-5xl font-semibold flex flex-col items-center space-y-3'>
						<h2 className='text-purple-900 '>Learn Music with</h2>
						<h2 className='text-white'>{instrument}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SwiperSlider;

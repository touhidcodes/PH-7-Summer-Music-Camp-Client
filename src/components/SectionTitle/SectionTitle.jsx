import React from "react";

const SectionTitle = ({heading, subheading}) => {
	return (
		<div className='text-center'>
			<h3 className='text-4xl border-y-4 border-red-400 w-fit px-8 py-2 mx-auto mt-3 font-semibold text-purple-900'>
				{heading}
			</h3>
			<p className='text-blue-500 text-xl mt-3'>... {subheading} ...</p>
		</div>
	);
};

export default SectionTitle;

import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = ({ loading }) => {
	return (
		<div className='flex justify-center mt-3'>
			<ClipLoader color={"red"} loading={loading} size={40} />
		</div>
	);
};

export default Loading;

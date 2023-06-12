import React from "react";
import useClass from "../../hooks/useClass/useClass";

const MyClasses = () => {
	const [classes] = useClass();
	console.log(classes);
	return (
		<div className='my-10'>
			<div className='text-xl my-5 font-semibold flex justify-between items-center'>
				<h4 className='text-purple-900'>
					Total Selected Class: {classes.length}
				</h4>
			</div>
			{classes.length === 0 && (
				<div>
					<h4 className='text-xl  px-5 font-semibold mb-5'>
						You have not added any Class!
					</h4>
				</div>
			)}
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead className='bg-purple-900 rounded-xl text-xl text-white font-semibold'>
						<tr>
							<th>#</th>
							<th>Class Name</th>
							<th>Instructor</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody className='text-xl font-semibold'>
						{/* row 1 */}

						{classes.map((row, index) => (
							<tr key={row._id}>
								<th>{index + 1}</th>
								<td>{row?.class_name}</td>
								<td>{row?.instructor_name}</td>
								<td>$ {row?.price}</td>
								<td>
									<button
										className='btn btn-error'
										// onClick={() => handleDelete(row)}
									>
										{/* <AiOutlineDelete className='h-8 w-6 text-white' /> */}x
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyClasses;

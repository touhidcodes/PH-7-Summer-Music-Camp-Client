import React from "react";
import usePending from "../../hooks/usePending/usePending";

const AddClassAdmin = () => {
	const [pending, refetch] = usePending();

	const handleApprove = () => {
		fetch("/")
	};
	const handleDeny = () => {
		console.log("click");
	};
	return (
		<div className='my-10 w-full'>
			<div className='text-xl my-5 font-semibold flex justify-between items-center ml-10'>
				<h4 className='text-purple-900'>Total Added Class: {pending.length}</h4>
			</div>
			{pending.length === 0 && (
				<div>
					<h4 className='text-xl  px-5 font-semibold mb-5'>
						You have any Pending Class!
					</h4>
				</div>
			)}
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead className='bg-purple-900 rounded-xl text-xl text-white font-semibold'>
						<tr>
							<th>#</th>
							<th>Image</th>
							<th>Instructor Name</th>
							<th>Instructor Email</th>
							<th>Available Seats</th>
							<th>Price</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody className='text-xl font-semibold'>
						{/* row 1 */}

						{pending.map((row, index) => (
							<tr key={row._id}>
								<th>{index + 1}</th>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='mask mask-squircle w-12 h-12'>
												<img src={row?.image} />
											</div>
										</div>
									</div>
								</td>
								<td>{row?.instructor_name}</td>
								<td>{row?.email}</td>
								<td>{row?.available_seats}</td>
								<td>$ {row?.price}</td>
								<td>{row?.status}</td>
								<td>
									<div className='dropdown dropdown-end'>
										<label
											tabIndex={0}
											className='btn m-1 btn-error text-white'
										>
											Click
										</label>
										<ul
											tabIndex={0}
											className='dropdown-content menu p-2 shadow bg-sky-300 rounded-box w-52 text-purple-900'
										>
											<li>
												<button onClick={handleApprove}>
													<a>Approve</a>
												</button>
											</li>
											<li>
												<button onClick={handleDeny}>
													<a>Deny</a>
												</button>
											</li>
										</ul>
									</div>
									{/* <button className='btn btn-error' onClick={handleUpdate}> */}
									{/* </button> */}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AddClassAdmin;

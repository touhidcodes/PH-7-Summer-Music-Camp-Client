import React from "react";
import usePending from "../../hooks/usePending/usePending";
import useAllClass from "../../hooks/useAllClass/useAllClass";
import Swal from "sweetalert2";

const AddClassAdmin = () => {
	const [allClass, refetch] = useAllClass();

	const handleApprove = (id) => {
		fetch(`http://localhost:5000/approve/${id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					refetch();
					Swal.fire("Class Approved");
				}
			});
	};
	const handleDeny = (id) => {
		fetch(`http://localhost:5000/deny/${id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				handleFeedback(id);
			});
	};

	const handleFeedback = async (id) => {
		const { value: formValues } = await Swal.fire({
			title: "Update Toy Information",
			html:
				"<label>Feedback:</label> " +
				'<input id="feedback" class="swal2-textarea" placeholder="Write your feedback">',
			showCancelButton: true,
			preConfirm: () => {
				return [document.getElementById("feedback").value];
			},
		});
		if (formValues) {
			const updatedData = {
				feedback: formValues[0],
			};
			fetch(`http://localhost:5000/feedback/${id}`, {
				method: "PATCH",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(updatedData),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.modifiedCount > 0) {
						refetch();
						Swal.fire("Success", "Feedback Added Successfully!", "success");
					}
				});
		}
	};
	return (
		<div className='my-10 w-full'>
			<div className='text-xl my-5 font-semibold flex justify-between items-center ml-10'>
				<h4 className='text-purple-900'>
					Total Added Class: {allClass.length}
				</h4>
			</div>
			{allClass.length === 0 && (
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

						{allClass.map((row, index) => (
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
								<td>{row?.status ? row?.status : "Approved"}</td>
								<td>
									<div className='dropdown dropdown-end'>
										<label
											tabIndex={0}
											className={
												row?.status === "Pending"
													? "btn m-1 btn-error text-white"
													: "btn m-1 text-white btn-disabled "
											}
										>
											Click
										</label>
										<ul
											tabIndex={0}
											className='dropdown-content menu p-2 shadow bg-sky-300 rounded-box w-52 text-purple-900'
										>
											<li>
												<button onClick={() => handleApprove(row._id)}>
													<a>Approve</a>
												</button>
											</li>
											<li>
												<button onClick={() => handleDeny(row._id)}>
													<a>Deny</a>
												</button>
											</li>
										</ul>
									</div>
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

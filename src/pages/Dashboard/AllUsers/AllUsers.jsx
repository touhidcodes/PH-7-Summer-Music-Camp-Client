import React from "react";
import useCart from "../../hooks/useCart/useCart";
import axiosBase from "../../hooks/useAxios/axiosBase";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await axiosBase.get("/users");
		return res.data;
	});
	console.log(users);
	const handleMakeAdmin = (user) => {
		fetch(`http://localhost:5000/users/admin/${user._id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: `${user.name} is an Admin Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
	return (
		<div className='my-10'>
			<div className='text-xl my-5 font-semibold'>
				<h4 className='text-purple-900'>Total Users: {users.length}</h4>
			</div>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead className='bg-purple-900 rounded-xl text-xl text-white font-semibold'>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Make Instructor</th>
							<th>Make Admin</th>
						</tr>
					</thead>
					<tbody className='text-xl font-semibold'>
						{/* row 1 */}
						{users.map((user, index) => (
							<tr key={user._id}>
								<th>{index + 1}</th>
								<td>{user?.name}</td>
								<td>{user?.email}</td>
								<td>{user?.role ? user.role : "student"}</td>
								<td>
									<button
										className='btn btn-error'
										onClick={() => handleMakeInstructor(user)}
									>
										X
									</button>
								</td>
								<td>
									<button
										className='btn btn-error'
										onClick={() => handleMakeAdmin(user)}
									>
										X
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

export default AllUsers;

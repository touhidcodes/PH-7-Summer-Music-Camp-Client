import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import useInstructor from "../../hooks/useInstructor/useInstructor";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

const AllUsers = () => {
	const [axiosSecure] = useAxiosSecure();
	const isInstructor = useInstructor();

	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await axiosSecure.get("/users");
		console.log(axiosSecure);
		return res.data;
	});

	const handleMakeAdmin = (user) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Make as Admin!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/users/admin/${user._id}`, {
					method: "PATCH",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.modifiedCount > 0) {
							refetch();
							Swal.fire("Success!", `${user.name} is an Admin Now!`, "success");
						}
					});
			}
		});
	};

	const handleMakeInstructor = (user) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Make as Instructor!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/users/instructor/${user._id}`, {
					method: "PATCH",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.modifiedCount > 0) {
							refetch();
							Swal.fire(
								"Success!",
								`${user.name} is an Instructor Now!`,
								"success"
							);
						}
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
							<th>User Name</th>
							<th>User Email</th>
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
								<td>{user?.role ? user.role : "Student"}</td>
								<td>
									<button
										className='btn btn-error'
										onClick={() => handleMakeInstructor(user)}
										disabled={user.role === "Instructor"}
									>
										<FaChalkboardTeacher className='h-8 w-6 text-white' />
									</button>
								</td>
								<td>
									<button
										className='btn btn-error'
										onClick={() => handleMakeAdmin(user)}
										disabled={user.role === "Admin"}
									>
										<MdAdminPanelSettings className='h-8 w-6 text-white' />
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

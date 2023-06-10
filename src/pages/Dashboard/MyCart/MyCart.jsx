import React from "react";
import useCart from "../../hooks/useCart/useCart";
import { AiOutlineDelete } from "react-icons/ai";

const MyCart = () => {
	const [cart, refetch] = useCart();
	console.log(cart);
	return (
		<div className="my-10">
			<div className="text-xl my-5 font-semibold flex justify-between items-center">
				<h4 className="text-purple-900">Total Selected Class: {cart.length}</h4>
                <button className="btn btn-info text-white text-xl">Pay</button>
			</div>
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
						{cart.map((row, index) => (
							<tr>
								<th>{index + 1}</th>
								<td>{row?.class_name}</td>
								<td>{row?.instructor_name}</td>
								<td>$ {row?.price}</td>
								<td>
									<button className='btn btn-error'>
										<AiOutlineDelete className='h-8 w-6 text-white' />
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

export default MyCart;

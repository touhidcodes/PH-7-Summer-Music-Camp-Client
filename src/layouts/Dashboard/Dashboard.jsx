import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";
import Footer from "../../pages/shared/Footer/Footer";
import ActiveRoute from "../../routes/ActiveRoutes/ActiveRoutes";

const Dashboard = () => {
	let admin = true;
	let user = false;
	const dashboardOptions = (
		<div className='text-xl font-semibold text-white'>
			{user && (
				<>
					<li className='mt-10'>
						<ActiveRoute>
							<Link to='/dashboard/myCart'>My Selected Classes</Link>
						</ActiveRoute>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</>
			)}
			{admin && (
				<>
					<li className='mt-10'>
						<ActiveRoute>
							<Link to='/dashboard/allUsers'>Manage Users</Link>
						</ActiveRoute>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</>
			)}
		</div>
	);
	return (
		<div>
			<Header />
			<div className='drawer lg:drawer-open'>
				<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
				<div className='drawer-content flex flex-col items-center justify-center'>
					{/* Page content here */}
					<Outlet />
					<label
						htmlFor='my-drawer-2'
						className='btn btn-primary drawer-button lg:hidden'
					>
						Open drawer
					</label>
				</div>
				<div className='drawer-side'>
					<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
					<ul className='menu p-4 w-80 h-full bg-purple-900 text-base-content rounded-xl'>
						{/* Sidebar content here */}
						{dashboardOptions}
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;

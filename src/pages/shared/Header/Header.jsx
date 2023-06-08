import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/home/logo.png";

const Header = () => {
	const navOptions = (
		<>
			<li>
				<Link to='/'>Home</Link>
			</li>

			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<a>Item 3</a>
			</li>
		</>
	);
	return (
		<div>
			<div className='navbar bg-purple-900  max-w-screen-xl   text-white rounded-b-lg'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							{navOptions}
						</ul>
					</div>
					<a className=' normal-case text-xl flex'>
						<img src={logo} alt='' className='h-14' />
						<div className='flex flex-col items-center justify-center font-bold ml-2'>
							<h2 className='text-sm'>Summer</h2>{" "}
							<h2 className='text-red-400 text-sm lg:text-xl'>Music Camp</h2>
						</div>
					</a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1 lg:text-xl font-semibold'>
						{navOptions}
					</ul>
				</div>
				<div className='navbar-end'>
					<a className='btn btn-error text-white mr-3'>Enroll Now</a>
				</div>
			</div>
		</div>
	);
};

export default Header;

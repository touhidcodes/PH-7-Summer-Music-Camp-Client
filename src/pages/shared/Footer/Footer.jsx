import React from "react";
import logo from "../../../assets/images/home/logo.png";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

const Footer = () => {
	return (
		<footer className='mt-10 lg:mb-5'>
			<div className='footer p-10  bg-base-200 text-base-content rounded-t-xl '>
				<div>
					<div className='flex items-center flex-col lg:flex-row'>
						<img src={logo} alt='toy' className='h-32' />
						<div className='ml-5'>
							<h2 className='text-4xl ml-5 font-bold text-center mt-5'>
								<div className='flex flex-col items-center justify-center font-bold ml-2'>
									<h2 className='text-red-400'>Summer</h2>{" "}
									<h2 className='text-purple-900'>Music Camp</h2>
								</div>
							</h2>
							<p className='w-60 text-md text-center mt-2 text-gray-600 '>
								Summer Music Camp is a summer school, focused on learning kids
								music instrumental.
							</p>
						</div>
					</div>

					<p className='flex lg:ml-5 items-center font-semibold mt-8'>
						<FaRegAddressBook className='h-5 w-5  text-purple-900 mr-3' />
						Address: 1800 Abbot Kinney, Nebraska, UK
					</p>
					<p className='flex lg:ml-5 items-center font-semibold'>
						<MdAlternateEmail className='h-5 w-5  text-purple-900  mr-3' />
						Email: hello@example.com
					</p>
					<p className='flex lg:ml-5 items-center font-semibold'>
						<HiPhone className='h-5 w-5  text-purple-900  mr-3' />
						Phone:(012) 345 6789
					</p>
				</div>

				<div className='font-semibold'>
					<span className='text-2xl text-purple-900 '>Quick Links</span>
					<a className='link link-hover'>Help Center</a>
					<a className='link link-hover'>Redeem Voucher</a>
					<a className='link link-hover'>Contact Us</a>
					<a className='link link-hover'>Policy & Rules</a>
					<a className='link link-hover'>Check Offer List</a>
				</div>
				<div className='font-semibold'>
					<span className=' text-2xl text-purple-900 '>Information</span>
					<a className='link link-hover'>About us</a>
					<a className='link link-hover'>Product Support</a>
					<a className='link link-hover'>Jobs</a>
					<a className='link link-hover'>Affiliate</a>
				</div>
				<div className='font-semibold'>
					<span className='text-2xl text-purple-900 '>Follow Us On</span>
					<a className='link link-hover'>Facebook</a>
					<a className='link link-hover'>Twitter</a>
					<a className='link link-hover'>Instagram</a>
				</div>
			</div>
			<div className='footer footer-center p-4 bg-purple-900  text-white lg:text-xl rounded-b-lg'>
				<div>
					<p>
						Copyright © Summer Music Camp - TouhidCodes | All right reserved at
						TouhidCodes
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

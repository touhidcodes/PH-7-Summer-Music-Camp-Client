import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	const handleShowPassword = () => {
		setShowPassword(!false);
		console.log("hi");
	};
	return (
		<div className='mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Login To Your Account</h1>
				<p className='text-purple-900 font-semibold mt-1'>Login</p>
			</div>
			<div className='w-1/2 mx-auto mt-5'>
				<div className=' card  p-10 rounded-xl shadow-2xl bg-base-100'>
					<div className='card-body border-dashed border-2 border-purple-900'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='form-control'>
								<label className='label flex flex-row justify-start'>
									<span className='text-gray-500 font-semibold'>
										E-MAIL ADDRESS:
									</span>
									<span className='text-red-500 font-bold ml-2'>*</span>
								</label>
								<input
									type='email'
									placeholder='Email Address'
									name='email'
									className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label flex flex-row justify-start'>
									<span className='text-gray-500 font-semibold'>PASSWORD:</span>
									<span className='text-red-500 font-bold ml-2'>*</span>
								</label>
								<input
									type={showPassword ? "text" : "password"}
									placeholder='Enter Your Password'
									name='password'
									className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
									required
								/>
							</div>
							<div
								className='flex flex-row justify-end items-center mt-2 relative'
								onClick={handleShowPassword}
							>
								{showPassword ? (
									<BsEyeSlashFill className='h-6 w-6 absolute -top-10 right-4' />
								) : (
									<BsEyeFill className='h-6 w-6 absolute -top-10 right-4' />
								)}
							</div>
							<div className='flex flex-row text-red-500 font-semibold mt-2'>
								<span className=' mr-2'>*</span>
								<p>Fields are required</p>
							</div>
							<input
								type='submit'
								value='Log In'
								className='form-control mt-4 btn btn-error text-white w-full'
							/>
						</form>
						<div className='divider'>OR</div>
						<div className='form-control'>
							<button
								className='btn btn-info text-white'
								// onClick={handleGoogleSignIn}
							>
								<FcGoogle className='h-8 w-8 mr-3' />
								Google Sign In
							</button>
						</div>

						<div>
							<p className='font-semibold mt-3 text-center'>
								<small>
									New to Toy Summer Music Camp?{" "}
									<Link
										to='/register'
										className='underline text-purple-900 font-bold'
									>
										Create An Account
									</Link>
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../hooks/useCart/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
	const [cart] = useCart();
    console.log(cart)
	const total = cart.reduce((sum, item) => sum + item.price, 0);
	const price = parseFloat(total.toFixed(2));
	console.log(price);
	return (
		<div>
			<h2 className='text-3xl'>Make Payment</h2>
			<Elements stripe={stripePromise}>
				<CheckOutForm cart={cart} price={price}></CheckOutForm>
			</Elements>
		</div>
	);
};

export default Payment;

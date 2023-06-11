import { useContext } from "react";
import axiosBase from "../useAxios/axiosBase";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
	const { user, loading } = useContext(AuthContext);

	const { refetch, data: cart = [] } = useQuery({
		queryKey: ["carts", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosBase(`/carts?email=${user?.email}`);
			// console.log("res from axios", res);
			return res.data;
		},
	});

	return [cart, refetch];
};
export default useCart;

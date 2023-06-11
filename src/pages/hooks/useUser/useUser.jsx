import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../context/AuthProvider";

const useUser = () => {
	const { user, loading } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();
	// use axios secure with react query
	const { data: isUser, isLoading: isUserLoading } = useQuery({
		queryKey: ["isUser", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/${user?.email}`);
			console.log(res.data.user);
			return res.data.user;
		},
	});
	return [isUser, isUserLoading];
};

export default useUser;

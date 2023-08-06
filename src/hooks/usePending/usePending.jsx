import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";

const usePending = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: pending = [] } = useQuery({
    queryKey: ["pending", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`pending?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [pending, refetch];
};

export default usePending;

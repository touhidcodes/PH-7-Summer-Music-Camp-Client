import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAllClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: allClass = [] } = useQuery({
    queryKey: ["allClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`classes/all?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [allClass, refetch];
};

export default useAllClass;

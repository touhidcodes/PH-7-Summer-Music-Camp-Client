import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/Instructor/${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default useInstructor;

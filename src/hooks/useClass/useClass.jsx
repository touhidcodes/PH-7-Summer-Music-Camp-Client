import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`classes?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [classes, refetch];
};
export default useClass;

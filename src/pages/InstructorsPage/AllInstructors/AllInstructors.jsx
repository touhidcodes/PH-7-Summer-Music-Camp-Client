import React, { useEffect, useState } from "react";
import axiosBase from "../../../hooks/useAxios/axiosBase";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Loading from "../../../components/Loading/Loading";
import ItemsCard from "../../../components/ItemsCard/ItemsCard";

const AllInstructors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosBase.get("instructors").then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="mt-10">
      <SectionTitle
        heading={"Our Instructors"}
        subheading={"See All Instructors"}
      />
      {loading && <Loading loading={loading} />}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 mx-3 lg:mx-0">
        {data.map((item) => (
          <ItemsCard
            key={item._id}
            id={item._id}
            type={"instructor"}
            title={item.instructor_name}
            image={item.image_url}
            email={item.email}
            name={item.class_name}
            enrolled={item.students_enrolled}
            taken={item.classes_taken}
            btnInfo={"View Details"}
          />
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;

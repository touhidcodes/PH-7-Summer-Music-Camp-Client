import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axiosBase from "../../../hooks/useAxios/axiosBase";

const InstructorDetails = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosBase
      .get(`instructors/${params.id}`)
      .then((data) => setData(data.data[0]));
    setLoading(false);
  }, []);
  console.log(data);
  return (
    <div className="bg-base-200 py-10 rounded-xl">
      {loading && <Loading loading={loading} />}
      <SectionTitle
        heading={data?.instructor_name}
        subheading={"View Details About Our Instructor"}
      />
      <div className="lg:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 card-body">
        <img src={data.image_url} alt="" className="rounded-xl" />
        <div className="space-y-3 text-xl">
          <h2 className="card-title mb-2 text-4xl text-purple-900">
            {data.instructor_name}
          </h2>
          <p className="font-semibold">
            <span>Email: </span>
            <span className="text-purple-900">{data.email}</span>
          </p>
          <p className="font-semibold">
            <span>Class Name: </span>
            <span className="text-purple-900">{data.class_name}</span>
          </p>
          <p className="font-semibold">
            <span>Student Enrolled: </span>
            <span className="text-purple-900">{data.students_enrolled}</span>
          </p>
          <p className="font-semibold">
            <span>Classes Taken: </span>
            <span className="text-purple-900">{data.classes_taken}</span>
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-error text-white mt-5">
              See Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;

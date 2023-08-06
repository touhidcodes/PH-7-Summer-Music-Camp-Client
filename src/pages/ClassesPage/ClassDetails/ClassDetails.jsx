import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axiosBase from "../../../hooks/useAxios/axiosBase";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";

const ClassDetails = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosBase.get(`classes/${params.id}`).then((data) => setData(data.data[0]));
    setLoading(false);
  }, []);

  const {
    _id,
    class_name,
    image,
    instructor_name,
    enrolled,
    total_seats,
    available_seats,
    price,
  } = data;

  const handleAddToCart = () => {
    if (user) {
      axiosBase
        .post("/carts", {
          booked_id: _id,
          email: user?.email,
          class_name,
          image,
          instructor_name,
          enrolled,
          total_seats,
          available_seats,
          price,
        })
        .then((data) => {
          console.log(data);

          if (data.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your class has been added",
              showConfirmButton: false,
              timer: 1500,
            });
          } else if (data.data.message) {
            Swal.fire("Your Class already added!");
          }
        });
    }
  };
  return (
    <div className="bg-base-200 py-10 rounded-xl">
      {loading && <Loading loading={loading} />}
      <SectionTitle
        heading={class_name}
        subheading={"View Details About this Class"}
      />
      <div className="lg:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 card-body">
        <img src={image} alt="" className="rounded-xl" />
        <div className="space-y-3 text-xl">
          <h2 className="card-title mb-2 text-4xl text-purple-900">
            {data.class_name}
          </h2>
          <p className="font-semibold">
            <span>Instructor Name: </span>
            <span className="text-purple-900">{instructor_name}</span>
          </p>
          <p className="font-semibold">
            <span>Enrolled Students: </span>
            <span className="text-purple-900">{enrolled}</span>
          </p>
          <p className="font-semibold">
            <span>Total Seats: </span>
            <span className="text-purple-900">{total_seats}</span>
          </p>
          <p className="font-semibold">
            <span>Available Seats: </span>
            <span className="text-purple-900">{available_seats}</span>
          </p>
          <p className="font-semibold">
            <span>Price: </span>
            <span className="text-purple-900">$ {price}</span>
          </p>
          <div className="card-actions justify-start">
            <button
              className="btn btn-error text-white mt-5"
              onClick={handleAddToCart}
            >
              Book Your Seat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const token = import.meta.env.VITE_IMG_API_KEY;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, seats, className, price, email } = data;
          axiosSecure
            .post("/class", {
              image: imgURL,
              class_name: className,
              instructor_name: name,
              email,
              available_seats: seats,
              total_seats: 10,
              price: parseFloat(price),
              enrolled: 0,
              status: "Pending",
            })
            .then((data) => {
              // console.log("after posting new menu item", data.data);
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Item added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };
  return (
    <div className="mt-10 mb-5 ">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Add Your Class</h1>
        <p className="text-purple-900 font-semibold mt-1">Add Class</p>
      </div>
      <div className="lg:w-[600px] mx-auto mt-5">
        <div className=" card  p-10 rounded-xl shadow-2xl bg-base-100">
          <div className="card-body border-dashed border-2 border-purple-900">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-gray-500 font-semibold">
                    INSTRUCTOR NAME:
                  </span>
                </label>
                <input
                  type="name"
                  placeholder="Instructor Name"
                  name="name"
                  className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                  defaultValue={user.displayName}
                  readOnly
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-gray-500 font-semibold">
                    INSTRUCTOR EMAIL:
                  </span>
                  <span className="text-red-500 font-bold ml-2">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                  defaultValue={user.email}
                  readOnly
                  {...register("email", { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-gray-500 font-semibold">
                    CLASS NAME:
                  </span>
                  <span className="text-red-500 font-bold ml-2">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Class Name"
                  name="url"
                  className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                  required
                  {...register("className", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-gray-500 font-semibold">
                    AVAILABLE SEATS:
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Seats"
                  name="Gender"
                  className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                  {...register("seats")}
                />
              </div>
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-gray-500 font-semibold">PRICE:</span>
                </label>
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="price"
                  className="bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400"
                  {...register("price")}
                />
              </div>
              <div className="form-control">
                <label className="label flex flex-row justify-start">
                  <span className="text-gray-500 font-semibold">
                    CLASS IMAGE:
                  </span>
                </label>
                <input
                  type="file"
                  placeholder="Address"
                  name="image"
                  className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
                  {...register("image")}
                />
              </div>
              <div className="flex flex-row text-red-500 font-semibold mt-2">
                <span className=" mr-2">*</span>
                <p>Fields are required</p>
              </div>

              <input
                type="submit"
                value="Add Class"
                className="form-control mt-4 btn btn-error text-white w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;

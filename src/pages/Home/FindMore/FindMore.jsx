import React from "react";

const FindMore = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 bg-gray-100 lg:grid-cols-4 p-10 lg:p-16 rounded-sm">
        <div className="col-span-3 lg:pr-20 flex flex-col justify-center text-center lg:text-start">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-700">
            How To Add Class from Summer Music Camp
          </h1>
          <p className="mt-5 text-gray-900 lg:text-xl">
            Whether you're a budding musician or have been playing for years,
            our Summer Music Camp promises to be an unforgettable experience
            filled with music, learning, and friendship.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="btn btn-error text-white mt-5 w-60 text-xl">
            Find Out More?
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindMore;

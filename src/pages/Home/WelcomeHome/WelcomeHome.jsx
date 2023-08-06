import React from "react";
import Lottie from "lottie-react";
import musicAnimation from "./music.json";

const Welcome = () => {
  return (
    <div className="mt-10 bg-gray-100 py-5 rounded-xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
        <div className="w-96 h-96 flex align-center">
          <Lottie animationData={musicAnimation} loop={true} />
        </div>
        <div className="col-span-2 lg:pr-20 flex flex-col justify-center px-10 text-center lg:text-start">
          <h1 className="text-4xl lg:text-7xl font-semibold text-gray-600 ">
            Welcome to <br /> Summer Music Camp
          </h1>
          <p className="mt-5 text-gray-500 lg:text-xl">
            At Summer Music Camp, we offer a wide range of musical programs and
            activities for all levels of musicians, from beginners to advanced
            players. Our experienced and passionate instructors create a
            supportive and inspiring environment where campers can learn, grow,
            and connect with other music enthusiasts.
          </p>
          <button className="btn btn-error text-white mt-5 w-80 text-xl">
            Why Summer Music Camp?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

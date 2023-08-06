import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemsCard from "../../../components/ItemsCard/ItemsCard";
import Loading from "../../../components/Loading/Loading";
import axiosBase from "../../../hooks/useAxios/axiosBase";

const PopularClass = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosBase.get("home/classes").then((data) => {
      setItems(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-base-200 py-10 mt-10 rounded-xl">
      <SectionTitle
        heading={"Popular Classes"}
        subheading={"Our Popular Summer Classes"}
      />
      {loading && <Loading loading={loading} />}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mx-3 lg:mx-10">
        {items.map((item) => (
          <ItemsCard
            key={item._id}
            id={item._id}
            type={"class"}
            title={item.class_name}
            image={item.image}
            name={item.instructor_name}
            enrolled={item.enrolled}
            seats={item.available_seats}
            btnInfo={"View Details"}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularClass;

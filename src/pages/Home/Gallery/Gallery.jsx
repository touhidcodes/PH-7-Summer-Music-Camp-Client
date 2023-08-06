import React from "react";
import img1 from "../../../assets/images/gallery/gallery_1.jpg";
import img2 from "../../../assets/images/gallery/gallery_2.jpg";
import img3 from "../../../assets/images/gallery/gallery_3.jpg";
import img4 from "../../../assets/images/gallery/gallery_4.jpg";
import AOS from "aos";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "aos/dist/aos.css";
AOS.init();

const Gallery = () => {
  return (
    <div className="mt-10">
      <SectionTitle heading={"Our Gallery"} subheading={"Recent Photoshoots"} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10 px-5 lg:px-0 items-center ">
        <div className="" data-aos="flip-left" data-aos-duration="1000">
          <img src={img1} alt="" className="rounded-xl w-full h-72" />
        </div>
        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <img src={img2} alt="" className="rounded-xl w-full h-96" />
        </div>
        <div className="" data-aos="flip-right" data-aos-duration="1000">
          <img src={img3} alt="" className="rounded-xl w-full h-72" />
        </div>
        <div className="" data-aos="fade-down" data-aos-duration="1000">
          <img src={img4} alt="" className="rounded-xl w-full h-96" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

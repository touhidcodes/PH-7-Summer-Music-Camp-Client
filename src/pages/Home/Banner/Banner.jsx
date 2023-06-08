import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import image1 from "../../../assets/images/banner/image1.jpg";
import image2 from "../../../assets/images/banner/image2.jpg";
import image3 from "../../../assets/images/banner/image3.jpg";
import image4 from "../../../assets/images/banner/image4.jpg";
import image5 from "../../../assets/images/banner/image5.jpg";

import SwiperSlider from "../../../components/SwiperSlider/SwiperSlider";

const Banner = () => {
	return (
		<div>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className='mySwiper h-[500px] rounded-xl'
			>
				<SwiperSlide>
					<SwiperSlider image={image1} instrument={"Cords"} />
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlider image={image2} instrument={"Drums"} />
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlider image={image3} instrument={"Guitars"} />
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlider image={image4} instrument={"Pianos"} />
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlider image={image5} instrument={"Violins"} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;

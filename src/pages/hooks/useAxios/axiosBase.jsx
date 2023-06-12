import axios from "axios";

const axiosBase = axios.create({
	baseURL: "https://ph-7-assignment-12-summer-music-camp-server.vercel.app/",
});

export default axiosBase;

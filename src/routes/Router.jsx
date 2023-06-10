import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Registration/Registration";
import ClassDetails from "../pages/ClassesPage/ClassDetails/ClassDetails";
import AllClasses from "../pages/ClassesPage/AllClasses/AllClasses";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/classes",
				element: <AllClasses />,
			},
			{
				path: "/classes/:id",
				element: <ClassDetails />,
			},
			{
				path: "/register",
				element: <Registration />,
			},
		],
	},
	{
		path: "*",
		element: <div>Error</div>,
	},
]);

export default router;

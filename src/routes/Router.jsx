import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import ClassDetails from "../pages/ClassesPage/ClassDetails/ClassDetails";

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
				element: <ClassesPage />,
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

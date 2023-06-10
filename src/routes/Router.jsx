import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ClassDetails from "../pages/ClassesPage/ClassDetails/ClassDetails";
import AllClasses from "../pages/ClassesPage/AllClasses/AllClasses";
import AllInstructors from "../pages/InstructorsPage/AllInstructors/AllInstructors";
import InstructorDetails from "../pages/InstructorsPage/InstructorDetails/InstructorDetails";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

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
				element: (
					<PrivateRoutes>
						<ClassDetails />
					</PrivateRoutes>
				),
			},
			{
				path: "/instructors",
				element: <AllInstructors />,
			},
			{
				path: "/instructors/:id",
				element: <InstructorDetails />,
			},
			{
				path: "/login",
				element: <Login />,
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

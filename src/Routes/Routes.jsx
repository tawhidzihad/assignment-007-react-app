import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import ErrorPage from "../Pages/Error/ErrorPage";
import HomaPage from "../Pages/HomePage/HomaPage";
import StatsPage from "../Pages/StatsPage/StatsPage";
import TimelinePage from "../Pages/TimelinePage/TimelinePage";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: HomaPage,
			},
			{
				path: "/details",
				Component: DetailsPage,
			},
			{
				path: "/timeline",
				Component: TimelinePage,
			},
			{
				path: "/stats",
				Component: StatsPage,
			},
			{
				path: "*",
				Component: ErrorPage,
			},
		],
	},
]);

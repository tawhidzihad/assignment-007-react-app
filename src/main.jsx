import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import UserActionContextProvider from "./context/UserActionContextProvider.jsx";
import "./index.css";
import { router } from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<UserActionContextProvider>
			<RouterProvider router={router}></RouterProvider>
		</UserActionContextProvider>
	</StrictMode>,
);

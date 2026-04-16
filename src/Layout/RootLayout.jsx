import { Outlet } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>
		</div>
	);
};

export default RootLayout;

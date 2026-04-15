import { Link } from "react-router";

const ErrorPage = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="text-center max-w-xl space-y-4 px-3">
				<h2 className="text-green-600 text-6xl font-extrabold">404</h2>
				<h2 className="text-black text-3xl">
					Oops! You're off the map.
				</h2>
				<p>
					We can't seem to find the page you're looking for. It might
					have moved or never existed in the first place.
				</p>

				<Link to={"/"} className="btn bg-green-700 text-white">
					Return to Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;

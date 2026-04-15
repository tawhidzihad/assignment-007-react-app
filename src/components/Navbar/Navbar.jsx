import { GoGraph } from "react-icons/go";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";
import NavbarLogo from "../../assets/images/logo.png";

const Navbar = () => {
	return (
		<div className="border-b border-zinc-200 sticky top-0 bg-white py-4 px-2 md:px-0">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<img src={NavbarLogo} alt="Navbar Logo" />
				</div>

				<div className="flex gap-2 items-center">
					<NavLink
						to={"/"}
						className={({ isActive }) =>
							`btn btn-xs sm:btn-sm md:btn-md flex items-center gap-1 ${isActive && "bg-green-800 text-white"}`
						}
					>
						<RiHome2Line className="md:text-xl"></RiHome2Line>Home
					</NavLink>

					<NavLink
						to={"/timeline"}
						className={({ isActive }) =>
							`btn btn-xs sm:btn-sm md:btn-md flex items-center gap-1 ${isActive && "bg-green-800 text-white"}`
						}
					>
						<RiTimeLine className="md:text-xl" /> Timeline
					</NavLink>

					<NavLink
						to={"/stats"}
						className={({ isActive }) =>
							`btn btn-xs sm:btn-sm md:btn-md flex items-center gap-1 ${isActive && "bg-green-800 text-white"}`
						}
					>
						<GoGraph className="md:text-xl"></GoGraph> Stats
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

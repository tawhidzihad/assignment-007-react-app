// import { useContext } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { UserActionContext } from "../../context/UserActionContext";
// import AudioCallLogo from "/call.png"
// import VideoCallLogo from "/video.png"
// import TextLogo from "/text.png"

const TimelinePage = () => {
	// const { userActions } = useContext(UserActionContext);

	return (
		<div className="bg-zinc-100 py-15 px-2 lg:px-0">
			<div className="max-w-7xl mx-auto space-y-4">
				<h1 className="text-4xl text-emerald-900">Timeline</h1>

				<div className="dropdown w-full">
					<div
						tabIndex={0}
						role="button"
						className="btn justify-between btn-wide font-normal bg-white"
					>
						Filter timeline
						<RiArrowDropDownLine className="text-3xl" />
					</div>

					<div
						tabIndex={0}
						className="dropdown-content card card-sm  z-1"
					>
						<ul className="py-2 pr-10 space-y-2">
							<li className="bg-emerald-100 text-emerald-400 px-3 py-1 rounded-full hover:text-white hover:bg-emerald-600">
								<a href="">Audio Call</a>
							</li>
							<li className="bg-emerald-100 text-emerald-400 px-3 py-1 rounded-full hover:text-white hover:bg-emerald-600">
								<a href="">Video Call</a>
							</li>
							<li className="bg-emerald-100 text-emerald-400 px-3 py-1 rounded-full hover:text-white hover:bg-emerald-600">
								<a href="">Text Message</a>
							</li>
						</ul>
					</div>
				</div>

				<div>
					{/* <img src={AudioCallLogo} alt="" />
					<img src={VideoCallLogo} alt="" />
					<img src={TextLogo} alt="" /> */}
				</div>
			</div>
		</div>
	);
};

export default TimelinePage;

import { useContext, useState } from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { UserActionContext } from "../../context/UserActionContext";
import AudioCallLogo from "/call.png";
import TextLogo from "/text.png";
import VideoCallLogo from "/video.png";

const TimelinePage = () => {
	const { userActions } = useContext(UserActionContext);
	const [sortingType, setSortingType] = useState(null)

	const [filtaredData, setFiltaredData] = useState(userActions);

	const handelFilteredBtn = (ActionType) => {
		setSortingType(ActionType)
		const newArry = userActions.filter(
			(userAction) => userAction.action === ActionType,
		);
		setFiltaredData(newArry);
	};

	return (
		<div className="bg-zinc-100 py-15 px-2 lg:px-0">
			{userActions.length === 0 ? (
				<div className="text-center py-5 text-gray-500 space-y-2">
					<div className="flex justify-center items-center">
						<GiArchiveResearch className="text-4xl" />
					</div>
					<h2 className="text-lg font-semibold">Empty Timeline</h2>
					<p className="text-sm">
						Your activity will appear here once you start
						interacting.
					</p>
				</div>
			) : (
				<div className="max-w-7xl mx-auto space-y-4">
					<h1 className="text-4xl text-emerald-900">Timeline</h1>

					<div className="dropdown w-full">
						<div
							tabIndex={0}
							role="button"
							className="btn justify-between btn-wide font-normal bg-white"
						>
							{`Filter ${sortingType ? sortingType : "timeline"}`}
							<RiArrowDropDownLine className="text-3xl" />
						</div>

						<div
							tabIndex={0}
							className="dropdown-content card card-sm bg-white z-1"
						>
							<ul className="py-2 pl-2 pr-10 space-y-2">
								<li
									onClick={() => handelFilteredBtn("Audio")}
									className="bg-emerald-100 cursor-pointer text-emerald-400 px-3 py-0.5 rounded-full hover:text-white hover:bg-emerald-600"
								>
									Audio Call
								</li>

								<li
									onClick={() => handelFilteredBtn("Video")}
									className="bg-emerald-100 cursor-pointer text-emerald-400 px-3 py-0.5 rounded-full hover:text-white hover:bg-emerald-600"
								>
									Video Call
								</li>

								<li
									onClick={() => handelFilteredBtn("Text")}
									className="bg-emerald-100 cursor-pointer text-emerald-400 px-3 py-0.5 rounded-full hover:text-white hover:bg-emerald-600"
								>
									Text Message
								</li>
							</ul>
						</div>
					</div>

					<div className="space-y-4">
						{filtaredData.map((userAction, ind) => (
							<div
								key={ind}
								className="p-3 border bg-white border-zinc-200 rounded-lg flex gap-5 items-center"
							>
								<div>
									<img
										src={`${userAction.action === "Video" ? VideoCallLogo : userAction.action === "Audio" ? AudioCallLogo : TextLogo}`}
										alt=""
									/>
								</div>
								<div className="space-y-1">
									<h3 className="text-slate-500">
										<span className="text-lg font-medium text-emerald-900">
											{userAction.action}
										</span>{" "}
										with {userAction.name}
									</h3>

									<p className="text-slate-500">
										{userAction.date}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default TimelinePage;

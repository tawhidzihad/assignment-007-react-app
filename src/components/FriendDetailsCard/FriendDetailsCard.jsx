import { useContext } from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoIosVideocam } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiArchiveDuotone, PiPhoneCallBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { UserActionContext } from "../../context/UserActionContext";

const FriendDetailsCard = ({ clickedFriend }) => {
	const { userActions, setUserActions } = useContext(UserActionContext);

	const {
		name,
		status,
		picture,
		tags,
		bio,
		email,
		next_due_date,
		goal,
		days_since_contact,
	} = clickedFriend;

	const modifiedDate = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const handleAudioCallBtn = () => {
		toast.success(`Call with ${name}`, {
			icon: <IoCall className="text-2xl" />,
		});

		setUserActions([
			...userActions,
			{
				name: name,
				action: "Call",
				date: modifiedDate,
			},
		]);
	};

	const handleTextBtn = () => {
		toast.success(`Text with ${name}`, {
			icon: <BiSolidMessageDetail className="text-2xl" />,
		});
		setUserActions([
			...userActions,
			{
				name: name,
				action: "Text",
				date: modifiedDate,
			},
		]);
	};

	const handleVideoCallBtn = () => {
		toast.success(`Video with ${name}`, {
			icon: <IoIosVideocam className="text-2xl" />,
		});
		setUserActions([
			...userActions,
			{
				name: name,
				action: "Video",
				date: modifiedDate,
			},
		]);
	};

	const statusStyle = {
		overdue: "bg-red-500 text-white capitalize px-3 py-1 rounded-full",
		"on-track":
			"bg-emerald-800 text-white capitalize px-3 py-1 rounded-full",

		"almost due":
			"bg-amber-400 text-white capitalize px-3 py-1 rounded-full",
	};

	return (
		<div className="grid lg:grid-cols-3 gap-5 py-10 px-3 lg:px-0">
			<div className="flex flex-col justify-center items-center space-y-3">
				<div className="bg-white w-full flex justify-center items-center flex-col py-5 px-3 space-y-3 border shadow-md border-zinc-200 rounded-lg">
					<img
						src={picture}
						alt={name}
						className="h-30 w-auto rounded-full"
					/>

					<h2 className="text-xl font-semibold">{name}</h2>
					<span className={`${statusStyle[status]}`}>{status}</span>
					{tags.map((tag, ind) => (
						<span
							className="bg-green-200 text-green-700 px-3 py-1 rounded-full font-semibold capitalize"
							key={ind}
						>
							{tag}
						</span>
					))}

					<p className="text-center italic text-zinc-500">"{bio}"</p>
					<p className="text-center text-xs text-zinc-600">
						Preferred: {email}
					</p>
				</div>

				<div className="w-full space-y-2">
					<div className="w-full shadow-md rounded-lg">
						<button className="btn w-full bg-white shadow-none rounded-lg">
							<HiOutlineBellSnooze className="text-xl" /> Snooze 2
							weeks
						</button>
					</div>

					<div className="w-full shadow-md rounded-lg">
						<button className="btn w-full bg-white shadow-none rounded-lg">
							<PiArchiveDuotone className="text-xl" /> Archive
						</button>
					</div>

					<div className="w-full shadow-md rounded-lg">
						<button className="btn w-full bg-white text-red-500 shadow-none rounded-lg">
							<RiDeleteBinLine className="text-xl" /> Delete
						</button>
					</div>
				</div>
			</div>

			<div className="lg:col-span-2 flex flex-col justify-between gap-3 items-center">
				{/* Div 1 */}
				<div className="w-full flex-1 grid grid-cols-3 gap-3">
					<div className="flex justify-center items-center flex-col border py-5 bg-white shadow-md border-zinc-200 rounded-lg text-center">
						<h3 className="text-[30px] font-semibold text-emerald-900">
							{days_since_contact}
						</h3>

						<p className="text-[18px] text-zinc-400">
							Days Since Contact
						</p>
					</div>

					<div className="flex justify-center items-center flex-col border py-5 bg-white shadow-md border-zinc-200 rounded-lg text-center">
						<h3 className="text-[30px] font-semibold text-emerald-900">
							{goal}
						</h3>
						<p className="text-[18px] text-zinc-400">Goal (Days)</p>
					</div>

					<div className="flex justify-center items-center flex-col border py-5 bg-white shadow-md border-zinc-200 rounded-lg text-center">
						<h3 className="text-[30px] font-semibold text-emerald-900">
							{next_due_date}
						</h3>
						<p className="text-[18px] text-zinc-400">Next Due</p>
					</div>
				</div>

				{/* Div 2 */}
				<div className="w-full flex-1 border bg-white shadow-md border-zinc-200 rounded-lg space-y-6 p-5">
					<div className="flex justify-between items-center">
						<span className="text-emerald-800 font-semibold">
							Relationship Goal
						</span>
						<span className="btn">Edit</span>
					</div>

					<div>
						<p className="text-[18px] text-zinc-500">
							Connect every{" "}
							<span className="font-bold text-zinc-800">
								{goal} days
							</span>
						</p>
					</div>
				</div>

				{/* Div 3 */}
				<div className="w-full flex-1 space-y-4 border bg-white shadow-md border-zinc-200 rounded-lg p-5">
					<p className="text-xl font-medium text-emerald-900">
						Quick Check-In
					</p>

					<div className="grid grid-cols-3 gap-3">
						<div
							onClick={handleAudioCallBtn}
							className="flex justify-center items-center bg-gray-100 py-5 border shadow-md border-zinc-200 rounded-lg hover:bg-gray-300 cursor-pointer"
						>
							<button className="flex cursor-pointer flex-col justify-center items-center gap-1">
								<PiPhoneCallBold />
								<span>Call</span>
							</button>
						</div>

						<div
							onClick={handleTextBtn}
							className="flex justify-center items-center bg-gray-100 py-5 border shadow-md border-zinc-200 rounded-lg hover:bg-gray-300 cursor-pointer"
						>
							<button className="flex cursor-pointer  flex-col justify-center items-center gap-1">
								<LuMessageSquareMore />
								<span>Text</span>
							</button>
						</div>

						<div
							onClick={handleVideoCallBtn}
							className="flex justify-center items-center bg-gray-100 py-5 border shadow-md border-zinc-200 rounded-lg hover:bg-gray-300 cursor-pointer"
						>
							<button className="flex cursor-pointer flex-col justify-center items-center gap-1">
								<BsCameraVideo />
								<span>Video</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FriendDetailsCard;

import { GoPlus } from "react-icons/go";
import { MoonLoader } from "react-spinners";
import useFriendsData from "../../hooks/useFriendsData";
import FriendCard from "../FriendCard/FriendCard";

const Banner = () => {
	const { friends, loading } = useFriendsData();

	console.log(friends);

	return (
		<div className="max-w-7xl mx-auto">
			<div className="flex justify-center items-center flex-col py-9 space-y-6 border-b border-zinc-200 text-center px-2 lg:px-0">
				<h1 className="text-5xl font-bold text-gray-800">
					Friends to keep close in your life
				</h1>
				<p className="">
					Your personal shelf of meaningful connections. Browse, tend,
					and nurture the relationships that matter most.
				</p>

				<button className="flex items-center btn shadow-none bg-emerald-800 text-white">
					<GoPlus className="text-xl"></GoPlus>Add a Friend
				</button>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
					<div className="py-8 text-center shadow-md border border-zinc-200 rounded-lg bg-white space-y-2">
						<p className="text-teal-800 font-bold text-3xl">{friends.length}</p>
						<p className="text-zinc-600">Total Friends</p>
					</div>

					<div className="py-8 text-center shadow-md border border-zinc-200 rounded-lg bg-white space-y-2">
						<p className="text-teal-800 font-bold text-3xl">3</p>
						<p className="text-zinc-600">On Track</p>
					</div>
					<div className="py-8 text-center shadow-md border border-zinc-200 rounded-lg bg-white space-y-2">
						<p className="text-teal-800 font-bold text-3xl">6</p>
						<p className="text-zinc-600">Need Attention</p>
					</div>

					<div className="py-8 text-center shadow-md border border-zinc-200 rounded-lg bg-white space-y-2">
						<p className="text-emerald-700 font-bold text-3xl">
							12
						</p>
						<p className="text-zinc-600">Interactions This Month</p>
					</div>
				</div>
			</div>

			<div className="py-8 px-2 lg:px-0">
				<h2 className="text-2xl text-emerald-950 pb-5">Your Friends</h2>

				{loading ? (
					<div className="min-h-1/3 flex justify-center items-center">
						<MoonLoader color="#1F2937" />
					</div>
				) : (
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
						{friends.map((friend, ind) => (
							<FriendCard friend={friend} key={ind}></FriendCard>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Banner;

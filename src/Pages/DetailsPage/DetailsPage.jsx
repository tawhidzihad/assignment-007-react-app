import { useParams } from "react-router";
import { MoonLoader } from "react-spinners";
import FriendDetailsCard from "../../components/FriendDetailsCard/FriendDetailsCard";
import useFriendsData from "../../hooks/useFriendsData";

const DetailsPage = () => {
	const { id } = useParams();
	const { friends, loading } = useFriendsData();
	const clickedFriend = friends.find((friend) => friend.id === Number(id));

	return (
		<div className="bg-zinc-100">
			{loading ? (
				<div className="min-h-90 flex justify-center items-center">
					<MoonLoader color="#1F2937" />
				</div>
			) : (
				<div className="max-w-7xl mx-auto">
					<FriendDetailsCard
						clickedFriend={clickedFriend}
					></FriendDetailsCard>
				</div>
			)}
		</div>
	);
};

export default DetailsPage;

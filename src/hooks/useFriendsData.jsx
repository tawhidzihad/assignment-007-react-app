import { useEffect, useState } from "react";

const useFriendsData = () => {
	const [friends, setFriends] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/data.json");
			const friendsData = await res.json();

			setTimeout(() => {
				setFriends(friendsData);
				setLoading(false);
			}, 1000);
		};

		fetchData();
	}, []);

	return { friends, setFriends, loading, setLoading };
};

export default useFriendsData;

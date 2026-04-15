const FriendCard = ({ friend }) => {
	const { name, days_since_contact, picture, status, tags } = friend;

	const statusStyle = {
		overdue: "bg-red-500 text-white capitalize px-3 py-1 rounded-full",
		"on-track":
			"bg-emerald-800 text-white capitalize px-3 py-2 rounded-full",

		"almost due":
			"bg-amber-400 text-white capitalize px-3 py-2 rounded-full",
	};

	console.log(friend);
	return (
		<div className="flex justify-center items-center flex-col border py-6 space-y-2 bg-white shadow-md border-zinc-200 rounded-lg">
			<div>
				<img
					src={picture}
					alt={name}
					className="h-20 w-auto rounded-full"
				/>
			</div>

			<div className="text-center space-y-2">
				<h2 className="text-xl font-semibold">{name}</h2>
				<p className="text-xs text-zinc-600">
					{days_since_contact}d ago
				</p>

				<div className="flex justify-center items-center gap-1 mb-3">
					{tags.map((tag, ind) => (
						<span
							className="bg-green-200 text-green-700 px-3 py-1 rounded-full font-semibold capitalize"
							key={ind}
						>
							{tag}
						</span>
					))}
				</div>

				<span className={`${statusStyle[status]}`}>
					{status}
				</span>
			</div>
		</div>
	);
};

export default FriendCard;

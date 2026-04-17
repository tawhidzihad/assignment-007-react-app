import { useContext } from "react";
import { FcPieChart } from "react-icons/fc";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { UserActionContext } from "../../context/UserActionContext";

const StatsPage = () => {
	const { userActions } = useContext(UserActionContext);

	const callLength = userActions.filter(
		(userAction) => userAction.action === "Call",
	).length;

	const videoLength = userActions.filter(
		(userAction) => userAction.action === "Video",
	).length;

	const textLength = userActions.filter(
		(userAction) => userAction.action === "Text",
	).length;

	const data = [
		{ name: "Text", value: textLength, fill: "#8230f2" },
		{ name: "Call", value: callLength, fill: "#264d3f" },
		{ name: "Video", value: videoLength, fill: "#3da265" },
	];
	const dataLength = data.some((item) => item.value > 0); // For empty chart

	const CustomLegend = ({ payload }) => {
		return (
			<ul className="flex flex-wrap gap-4 justify-center mt-4">
				{payload.map((entry, index) => (
					<li
						key={`item-${index}`}
						className="flex items-center gap-2 mt-5"
					>
						<div
							className="w-3 h-3 rounded-full"
							style={{ backgroundColor: entry.color }}
						></div>
						<span className="text-md text-gray-700">
							{entry.value}
						</span>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="bg-zinc-100">
			<div className="max-w-7xl mx-auto py-10 px-2 lg:px-0">
				<h1 className="text-4xl text-emerald-900 font-bold">
					Friendship Analytics
				</h1>

				<div className="my-8 p-6 bg-white rounded-lg shadow-sm">
					<h2 className="text-emerald-900 font-medium text-lg">
						By Interaction Type
					</h2>

					{dataLength ? (
						<div className="flex justify-center items-center py-5">
							<PieChart
								style={{
									width: "100%",
									maxWidth: "400px",
									maxHeight: "80vh",
									aspectRatio: 1,
								}}
								responsive
							>
								<Pie
									data={data}
									innerRadius="80%"
									outerRadius="100%"
									// Corner radius is the rounded edge of each pie slice
									cornerRadius="50%"
									fill="#8884d8"
									// padding angle is the gap between each pie slice
									paddingAngle={5}
									dataKey="value"
									isAnimationActive={true}
								/>
								<Legend content={CustomLegend} />
								<Tooltip></Tooltip>
							</PieChart>
						</div>
					) : (
						<div className="flex justify-center items-center flex-col py-5 h-50 space-y-3">
							<FcPieChart className="text-6xl"></FcPieChart>
							<h3 className="text-2xl text-emerald-950">
								No Data Available
							</h3>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default StatsPage;

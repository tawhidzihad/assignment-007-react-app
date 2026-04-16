import { useState } from "react";
import { UserActionContext } from "./UserActionContext";

const UserActionContextProvider = ({ children }) => {
	const [userActions, setUserActions] = useState([]);

	const data = {
		userActions,
		setUserActions,
	};

	return (
		<UserActionContext.Provider value={data}>
			{children}
		</UserActionContext.Provider>
	);
};

export default UserActionContextProvider;

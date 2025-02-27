import { act } from "react-test-renderer";
import { AuthState } from "./AuthContext";

type AuthAction =
	| { type: "signIn" }
	| { type: "logout" }
	| { type: "changeFavIcon"; payload: string }
	| { type: "changeUsername"; payload: string };

// genera estado
export const authReducer = (
	state: AuthState,
	action: AuthAction
): AuthState => {
	switch (action.type) {
		case "signIn":
			return {
				...state,
				isLoggedIn: true,
				userName: "no-username-yet",
			};
		case "logout":
			return {
				...state,
				isLoggedIn: false,
				userName: undefined,
				favoriteIcon: undefined,
			};
		case "changeFavIcon":
			return { ...state, favoriteIcon: action.payload };

		case "changeUsername":
			return {
				...state,
				userName: action.payload,
			};

		default:
			return state;
	}
};

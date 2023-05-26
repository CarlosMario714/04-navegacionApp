import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
import { Pagina1Screen } from "../screen/Pagina1Screen";

//definir como luce, que informacion se va a tener aqui
export interface AuthState {
	isLoggedIn: boolean;
	userName?: string;
	favoriteIcon?: string;
}

//estado inicial
export const authInitialState: AuthState = {
	isLoggedIn: false,
	userName: undefined,
	favoriteIcon: undefined,
};

//se usa para decirle a react como luce y que exporta el context
export interface AuthContextProps {
	authState: AuthState;
	signIn: () => void;
	logout: () => void;
	changeFavoriteIcon: (iconName: string) => void;
	changeUsername: (username: string) => void;
}

//crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//componenete proveedor del estado
export const AuthProvider = ({ children }: any) => {
	const [authState, dispatch] = useReducer(authReducer, authInitialState);

	const signIn = () => {
		dispatch({ type: "signIn" });
	};

	const changeFavoriteIcon = (iconName: string) => {
		dispatch({ type: "changeFavIcon", payload: iconName });
	};

	const logout = () => {
		dispatch({ type: "logout" });
	};

	const changeUsername = (username: string) => {
		dispatch({ type: "changeUsername", payload: username });
	};

	return (
		<AuthContext.Provider
			value={{ authState, signIn, changeFavoriteIcon, logout, changeUsername }}
		>
			{children}
		</AuthContext.Provider>
	);
};

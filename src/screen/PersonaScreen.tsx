import React, { useEffect, useContext } from "react";
import { Text, View, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../theme/appTheme";
import { RootStackParams } from "../navigator/StackNavigator";
import { AuthContext } from "../context/AuthContext";

// interface RouterParams {
//     id: number
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, "PersonaScreen"> {}

export const PersonaScreen = ({ route, navigation }: Props) => {
	// const params = route.params as RouterParams

	const params = route.params;
	const { changeUsername } = useContext(AuthContext);

	useEffect(() => {
		navigation.setOptions({
			title: params.nombre,
		});
	}, []);

	useEffect(() => {
		changeUsername(params.nombre);
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
		</View>
	);
};

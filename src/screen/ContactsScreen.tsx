import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../theme/appTheme";
import { AuthContext } from "../context/AuthContext";

export const ContactsScreen = () => {
	const { signIn, authState } = useContext(AuthContext);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>contactsscreen</Text>

			{!authState.isLoggedIn && <Button title="signIn" onPress={signIn} />}
		</View>
	);
};

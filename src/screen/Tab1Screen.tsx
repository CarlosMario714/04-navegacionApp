import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text } from "react-native";
import { colores, styles } from "../theme/appTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableIcon } from "../components/TouchableIcon";

export const Tab1Screen = () => {
	const { top } = useSafeAreaInsets();

	useEffect(() => {
		console.log("tab1screen effect");
	}, []);

	return (
		<View style={{ ...styles.globalMargin, marginTop: top }}>
			<Text style={styles.title}>Tab1Screen</Text>

			<TouchableIcon iconName="card-outline" />
			<TouchableIcon iconName="wallet-outline" />
			<TouchableIcon iconName="airplane-outline" />
			<TouchableIcon iconName="trending-up-outline" />
		</View>
	);
};

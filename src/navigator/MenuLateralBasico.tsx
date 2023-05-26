import React from "react";
import {
	DrawerContent,
	DrawerContentComponentProps,
	DrawerContentScrollView,
	createDrawerNavigator,
} from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "../screen/SettingsScreen";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { styles } from "../theme/appTheme";

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
	const { width } = useWindowDimensions();

	return (
		<Drawer.Navigator
			// para esconder ico por defecto
			screenOptions={{
				headerShown: false,
				// mostrar el side bar permanentemente
				drawerType: width > 768 ? "permanent" : "front",
			}}
		>
			<Drawer.Screen
				name="StackNavigator"
				options={{ title: "Home" }}
				component={StackNavigator}
			/>
			<Drawer.Screen
				name="SettingsScreen"
				options={{ title: "Settings" }}
				component={SettingsScreen}
			/>
		</Drawer.Navigator>
	);
};

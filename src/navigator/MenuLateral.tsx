import React from "react";
import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	createDrawerNavigator,
} from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "../screen/SettingsScreen";
import {
	Image,
	Text,
	TouchableOpacity,
	View,
	useWindowDimensions,
} from "react-native";
import { styles } from "../theme/appTheme";
import { createStackNavigator } from "@react-navigation/stack";
import { Tabs } from "./Tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator()
// const SettingsStackScreen = () => {
// 	return
// }

export const MenuLateral = () => {
	const { width } = useWindowDimensions();

	return (
		<Drawer.Navigator
			// para esconder ico por defecto
			screenOptions={{
				headerShown: false,
				// mostrar el side bar permanentemente
				drawerType: width > 768 ? "permanent" : "front",
			}}
			drawerContent={(props) => <MenuInterno {...props} />}
		>
			<Drawer.Screen name="Tabs" options={{ title: "Home" }} component={Tabs} />
			<Drawer.Screen
				name="SettingsScreen"
				options={{ title: "Settings" }}
				component={SettingsScreen}
			/>
		</Drawer.Navigator>
	);
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
	return (
		<DrawerContentScrollView>
			{/*  parte del avatar */}
			<View style={styles.avatarContainer}>
				<Image
					source={{
						uri: "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif",
					}}
					style={styles.avatar}
				/>
			</View>

			{/* opciones de menu */}
			<View style={styles.menuContainer}>
				<TouchableOpacity
					style={{ ...styles.menuBoton, flexDirection: "row" }}
					onPress={() => navigation.navigate("Tabs")}
				>
					<Icon name="compass-outline" size={20} color="white" />
					<Text style={styles.menuTexto}> Navegacion</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ ...styles.menuBoton, flexDirection: "row" }}
					onPress={() => navigation.navigate("SettingsScreen")}
				>
					<Icon name="settings-outline" size={20} color="white" />
					<Text style={styles.menuTexto}> Ajustes </Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
};

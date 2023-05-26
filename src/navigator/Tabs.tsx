import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Tab1Screen } from "../screen/Tab1Screen";
import { Tab2Screen } from "../screen/Tab2Screen";
import { Tab3Screen } from "../screen/Tab3Screen";
import { StackNavigator } from "./StackNavigator";
import { colores, styles } from "../theme/appTheme";
import { Platform, Text } from "react-native";
import { TopTapNavigator } from "./TopTabNavigator";
import Icon from "react-native-vector-icons/Ionicons";

export const Tabs = () => {
	return Platform.OS === "ios" ? <TabsIOS /> : <TabsAndorid />;
};

const bottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndorid = () => {
	return (
		<bottomTabAndroid.Navigator
			sceneAnimationEnabled={true}
			barStyle={{ backgroundColor: colores.primary }}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, focused }) => {
					let iconName: string = "";

					switch (route.name) {
						case "Tab1Screen":
							iconName = "pizza-outline";
							break;
						case "Tab2Screen":
							iconName = "sad-outline";
							break;
						case "StackNavigator":
							iconName = "tennisball-outline";
							break;
					}

					return <Icon name={iconName} size={20} color={color} />;
				},
			})}
		>
			<bottomTabAndroid.Screen
				name="Tab1Screen"
				options={{
					title: "Tab1",
				}}
				component={Tab1Screen}
			/>
			<bottomTabAndroid.Screen
				name="Tab2Screen"
				options={{ title: "Tab2" }}
				component={TopTapNavigator}
			/>
			<bottomTabAndroid.Screen
				name="StackNavigator"
				options={{ title: "Stack" }}
				component={StackNavigator}
			/>
		</bottomTabAndroid.Navigator>
	);
};

const bottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
	return (
		<bottomTabIOS.Navigator
			sceneContainerStyle={{ backgroundColor: "white" }}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: colores.primary,
				tabBarStyle: {
					borderTopColor: colores.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle: { fontSize: 15 },
				tabBarIcon: ({ color, focused, size }) => {
					let iconName: string = "";

					switch (route.name) {
						case "Tab1Screen":
							iconName = "bandage-outline";
							break;
						case "Tab2Screen":
							iconName = "baskerball-outline";
							break;
						case "StackNavigator":
							iconName = "bookmarks-outline";
							break;
					}

					return <Icon name={iconName} size={20} color={color} />;
				},
			})}
		>
			<bottomTabIOS.Screen
				name="Tab1Screen"
				options={{
					title: "Tab1",
					// tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>,
				}}
				component={Tab1Screen}
			/>
			<bottomTabIOS.Screen
				name="Tab2Screen"
				options={{ title: "Tab2" }}
				component={TopTapNavigator}
			/>
			<bottomTabIOS.Screen
				name="StackNavigator"
				options={{ title: "Stack" }}
				component={StackNavigator}
			/>
		</bottomTabIOS.Navigator>
	);
};

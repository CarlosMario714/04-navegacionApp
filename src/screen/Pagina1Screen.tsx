import React, { useEffect } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { colores, styles } from "../theme/appTheme";
import { DrawerScreenProps } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation }: Props) => {
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableOpacity
					style={{ marginLeft: 10 }}
					onPress={() => navigation.toggleDrawer}
				>
					<Icon name="menu-outline" size={35} color={colores.primary} />
				</TouchableOpacity>
			),
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Pagina1Screen</Text>
			<Button
				title="Ir pagina 2"
				onPress={() => navigation.navigate("Pagina2Screen")}
			/>
			<Button
				title="Ir Persona"
				onPress={() => navigation.navigate("PersonaScreen")}
			/>
			<Text style={{ marginVertical: 20, fontSize: 20, marginLeft: 5 }}>
				Navegar con argumentos
			</Text>
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					style={{ ...styles.botonGrande, backgroundColor: "#5856D6" }}
					onPress={() =>
						navigation.navigate("PersonaScreen", {
							id: 1,
							nombre: "Pedro",
						})
					}
				>
					<Icon name="man-outline" size={35} color="black" />
					<Text style={styles.botonGrandeTexto}>Pedro</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.botonGrande}
					onPress={() =>
						navigation.navigate("PersonaScreen", {
							id: 2,
							nombre: "Maria",
						})
					}
				>
					<Icon name="woman-outline" size={35} color="black" />
					<Text style={styles.botonGrandeTexto}>Maria</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

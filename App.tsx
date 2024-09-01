/** @format */

import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Detail from "./Screens/Detail/Detail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions: any = {
	tabBarShowLbel: false,
	headerShown: false,
	tabBarStyle: {
		position: "absolute",
		bottom: 14,
		right: 0,
		left: 0,
		elevation: 0,
		height: 60,
		backgroundColor: "#fff",
		paddingVertical: 17,
	},
	tabBarShowLabel: false,
};

type TabBarIconProps = {
	focused: boolean;
	color: string;
	size: number;
};

function MainTabs() {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Home"
				component={Dashboard}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<Ionicons
								name="home-outline"
								size={20}
								color={focused ? "#000" : "#000"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "#fb5607" : "black" }}>
								Home
							</Text>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name="Learn"
				component={Dashboard}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<AntDesign
								name="book"
								size={25}
								color={focused ? "#fb5607" : "#000"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "#fb5607" : "black" }}>
								Hymns
							</Text>
						</View>
					),
				}}
			/>
			{/* <Tab.Screen
				name="Prayers"
				component={Dashboard}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<AntDesign
								name="book"
								size={25}
								color={focused ? "#000" : "#000"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "#fb5607" : "black" }}>
								Hymns
							</Text>
						</View>
					),
				}}
			/> */}
			<Tab.Screen
				name="Category"
				component={Dashboard}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<MaterialIcons
								name="category"
								size={20}
								color={focused ? "#000" : "black"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "#fb5607" : "black" }}>
								Category
							</Text>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Main"
					component={MainTabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="DetailScreen" component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// style={{
//   top: -20,
//   width: 60,
//   height: 60,
//   borderRadius: 30,
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "#fb5607",
// }}

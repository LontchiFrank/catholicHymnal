/** @format */

import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	SafeAreaView,
	ViewToken,
	FlatList,
	ImageBackground,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import { PaperProvider, Card } from "react-native-paper";
import { useSharedValue } from "react-native-reanimated";
import { ListItem } from "../../Components/ListItem";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/type";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

type HomeScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"DetailScreen"
>;

function Dashboard({ navigation }: any) {
	const [loading, setLoading] = useState(true);
	const [hymnals, setHymnals] = useState([]);
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const screenWidth = Dimensions.get("window").width;
	const viewableItems = useSharedValue<ViewToken[]>([]);

	useEffect(() => {
		async function loadFonts() {
			await Font.loadAsync({
				Dreams: require("../../assets/fonts/dream.otf"),
				Nunito: require("../../assets/fonts/Nunito.ttf"),
			});
			setFontsLoaded(true);
		}

		loadFonts();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				// Reference to your Firestore collection
				const querySnapshot = await getDocs(collection(db, "Hymnal"));

				// Map through the data and set it in state
				const items: any = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				console.log(items);
				setHymnals(items);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};
		fetchData();
	}, []);

	console.log(hymnals);
	const sortedCategories = hymnals.sort(
		(a: any, b: any) => a.hymnNumber - b.hymnNumber
	);

	return (
		<View style={styles.container}>
			{/* <StatusBar style="light" backgroundColor="#000" /> */}

			{/* <View style={styles.banner}>
				<View style={styles.profileHeadDash}>
					<View style={styles.userImage}>
						<Icon name="user-o" size={30} color="#000" />
					</View>
					<View>
						<Text>Hello ,</Text>
						<Text style={styles.textGreeting}>Good Morning</Text>
					</View>
				</View>
				<View style={styles.notificationCircle}>
					<IconBell name="notifications-outline" size={25} color="#000" />
				</View>
			</View> */}
			<View style={styles.flatListViewContainer}>
				<View style={styles.flatListViewFirst}>
					<View
						style={{
							paddingHorizontal: 20,
							marginTop: 32,
						}}>
						<Text
							style={{
								fontSize: 39,
								fontWeight: "700",
								color: "#fff",
								paddingBottom: 16,
								fontFamily: "Dreams",
							}}>
							All Hymns
						</Text>
						<Text style={{ fontSize: 16, fontWeight: "600", color: "#c5c9d1" }}>
							Available Chants
						</Text>
					</View>
				</View>
				<View style={styles.flatLists}>
					<View style={styles.flatListView}>
						<FlatList
							data={sortedCategories}
							onViewableItemsChanged={({ viewableItems: vItems }) => {
								viewableItems.value = vItems;
							}}
							renderItem={({ item }) => {
								return (
									<TouchableOpacity
										onPress={() =>
											navigation.navigate("DetailScreen", { item })
										}>
										<ListItem item={item} viewableItems={viewableItems} />
									</TouchableOpacity>
								);
							}}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

export default Dashboard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		width: "100%",
		paddingTop: 60,
		backgroundColor: "white",
	},
	banner: {
		width: "100%",
		height: 100,
		display: "flex",
		backgroundColor: "white",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	profileHeadDash: {
		flex: 1,
		width: "50%",
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		backgroundColor: "white",
	},
	userImage: {
		width: 50,
		height: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		borderWidth: 1,
		borderColor: "#000",
		backgroundColor: "white",
	},
	textGreeting: {
		fontSize: 22,
		fontWeight: "600",
	},
	notificationCircle: {
		width: 40,
		height: 40,
		borderRadius: 50,
		borderWidth: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#000",
	},
	flatListView: {
		paddingTop: 220,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	flatListViewContainer: {
		height: "100%",
		width: "100%",
		position: "absolute",
		zIndex: -3,
		backgroundColor: "#f2f3f8",
	},
	flatLists: {
		// backgroundColor: "yellow",
		// marginLeft: 18,
	},
	flatListViewFirst: {
		height: "30%",
		width: "100%",
		// backgroundColor: "#e7c6ff",
		backgroundColor: "#281b6a",
		paddingTop: 60,
		position: "absolute",
		zIndex: -3,
	},

	cardsContainer: {
		display: "flex",
		flexWrap: "wrap",
		gap: 8,
	},
	cardBox: {
		width: "100%",
		height: 100,
		backgroundColor: "green",
	},
});

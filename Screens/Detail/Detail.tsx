/** @format */

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/type";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "DetailScreen">;

type DetailScreenProps = {
	navigation: DetailScreenRouteProp;
};

function Detail({ navigation }: DetailScreenProps) {
	const route = useRoute();
	const { item }: any = route.params;
	return (
		<View style={styles.container}>
			<Text>{item?.description}</Text>
		</View>
	);
}

export default Detail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		width: "100%",
		paddingTop: 60,
		backgroundColor: "white",
	},
});

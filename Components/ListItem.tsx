/** @format */

import React from "react";
import { StyleSheet, ViewToken, ScrollView, View, Text } from "react-native";
import Animated, {
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";
import { PaperProvider, Card } from "react-native-paper";

type ListItemProps = {
	viewableItems: Animated.SharedValue<ViewToken[]>;
	item: {
		id: any;
		category: string;
		title: string;
		hymnNumber: number;
	};
};

const ListItem: React.FC<ListItemProps> = React.memo(
	({ item, viewableItems }) => {
		const rStyle = useAnimatedStyle(() => {
			const isVisible = Boolean(
				viewableItems.value
					.filter((item) => item.isViewable)
					.find((viewableItem) => viewableItem.item.id === item.id)
			);

			return {
				opacity: withTiming(isVisible ? 1 : 0),
				transform: [
					{
						scale: withTiming(isVisible ? 1 : 0.5),
					},
				],
			};
		}, []);

		return (
			<Animated.View style={[rStyle]}>
				<PaperProvider>
					<View
						style={{
							width: 390,
							height: 80,
							borderRadius: 5,
							backgroundColor: "#fff",
							// borderLeftWidth: 6,
							// borderLeftColor: "#fb6f92",
							marginBottom: 20,
							shadowColor: "rgba(149, 157, 165, 0.2)", // Shadow color with opacity
							shadowOffset: { width: 0, height: 3 }, // Offset for x and y axis
							shadowOpacity: 8, // Opacity of the shadow
							shadowRadius: 5, // Blur radius
							elevation: 8,
						}}>
						<Card.Title
							title={item.title}
							subtitle={
								<Text
									style={{
										textTransform: "uppercase",
										color: "#95a1b4",
										fontSize: 12,
										fontWeight: "600",
									}}>
									{item.category}
								</Text>
							}
							titleStyle={{
								fontSize: 18,
								fontWeight: "600",
								color: "#193d69",
							}}
							subtitleStyle={{ fontSize: 14 }}
							left={({ size }: { size: number }) => (
								<View
									style={{
										width: 50,
										height: 50,
										borderRadius: 10,
										backgroundColor: "#f3f3f5",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Text
										style={{
											textAlign: "center",
											fontSize: 22,
											color: "#422e8b",
											fontWeight: "800",
										}}>
										{item.hymnNumber}
									</Text>
								</View>
							)}
						/>
					</View>
					{/* </ScrollView> */}
				</PaperProvider>
			</Animated.View>
		);
	}
);

// const styles = StyleSheet.create({
// 	listItem: {
// 		height: 80,
// 		width: "90%",
// 		backgroundColor: "#78CAD2",
// 		alignSelf: "center",
// 		borderRadius: 15,
// 		marginTop: 20,
// 	},
// });

export { ListItem };

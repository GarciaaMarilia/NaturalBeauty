import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../Global/Styles/theme";

export const styles = StyleSheet.create({
 container: {
  width: Dimensions.get("screen").width * 0.7,
  height: 0.4,
  marginLeft: 22,
  alignSelf: "flex-start",
  backgroundColor: theme.colors.gray,
 },
});

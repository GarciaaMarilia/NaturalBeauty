import { StyleSheet } from "react-native";
import { theme } from "../../Global/Styles/theme";

export const styles = StyleSheet.create({
 containerItem: {
  flex: 1,
  flexDirection: "row",
 },

 image: {
  height: 100,
  width: 100,
  marginVertical: 8,
  marginHorizontal: 14,
  borderRadius: 10,
 },

 product: {
  fontFamily: theme.fonts.title,
  color: theme.colors.gray,
  fontSize: 20,
 },

 row: {
  flexDirection: "row",
 },

 icon: { position: "absolute", marginLeft: 130, marginTop: 6 },
});

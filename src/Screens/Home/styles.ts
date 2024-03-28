import { StyleSheet } from "react-native";
import { theme } from "../../Global/Styles/theme";

export const styles = StyleSheet.create({
 content: {
  flex: 1,
  backgroundColor: theme.colors.white,
 },

 title: {
  fontSize: 50,
  marginVertical: 60,
  marginHorizontal: 20,
  color: theme.colors.gray,
  fontFamily: theme.fonts.title,
 },
});

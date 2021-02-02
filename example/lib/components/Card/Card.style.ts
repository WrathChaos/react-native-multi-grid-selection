import { ViewStyle, Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    minHeight: 300,
    width: ScreenWidth * 0.9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
  },
});

import { ViewStyle, Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  listContentContainerStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    minHeight: 180,
    alignSelf: "baseline",
    width: ScreenWidth * 0.9,
    marginLeft: 16,
    marginTop: 16,
    backgroundColor: "#fdfdfd",
    borderRadius: 12,
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  listContentContainerStyle: {
    flexGrow: 1,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: "center",
  },
});

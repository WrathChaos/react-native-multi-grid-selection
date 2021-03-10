import { ViewStyle, Dimensions, StyleSheet, TextStyle } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  listContentContainerStyle: ViewStyle;
  headerStyle: ViewStyle;
  headerTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    minHeight: 225,
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
    paddingLeft: 8,
    paddingRight: 8,
  },
  headerStyle: {
    height: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  headerTextStyle: {
    marginLeft: 12,
    color: "#fff",
    fontWeight: "bold",
  },
});

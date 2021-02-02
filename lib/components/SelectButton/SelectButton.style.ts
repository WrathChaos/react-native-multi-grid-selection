import { ViewStyle, StyleSheet, Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

export const _shadowStyle = (
  isActive: boolean,
  activeColor: string,
): ViewStyle => ({
  shadowRadius: 5,
  shadowOpacity: 0.25,
  shadowColor: isActive ? activeColor : "#757575",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  elevation: 3,
});

export const _iconContainer = (
  isActive: boolean,
  activeColor: string,
  selectMode: boolean,
): ViewStyle => ({
  width: 30,
  height: 30,
  borderRadius: 30,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isActive
    ? selectMode
      ? "#e3e7e6"
      : activeColor
    : "#e3e7e6",
});

interface Style {
  container: ViewStyle;
  buttonStyle: ViewStyle;
  textContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {},
  buttonStyle: {
    padding: 12,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: ScreenWidth * 0.9,
  },
  textContainer: {
    marginLeft: 16,
  },
});

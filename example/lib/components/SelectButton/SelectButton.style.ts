import { ViewStyle, StyleSheet, Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

export const _iconContainer = (
  isActive: boolean,
  activeColor: string,
): ViewStyle => ({
  width: 20,
  height: 20,
  borderRadius: 30,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isActive ? activeColor : "#f0f0f0",
});

export const _container = (
  isActive: boolean,
  activeColor: string,
): ViewStyle => ({
  backgroundColor: isActive ? activeColor : "#fff",
  minHeight: 60,
  marginTop: 12,
  borderWidth: 1,
  borderRadius: 8,
  alignItems: "center",
  borderColor: "#e9eaea",
  justifyContent: "center",
});

interface Style {
  buttonStyle: ViewStyle;
  textContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  buttonStyle: {
    padding: 12,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    width: ScreenWidth * 0.8,
  },
  textContainer: {
    marginLeft: 16,
  },
});

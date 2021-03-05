import { ViewStyle, TextStyle, StyleSheet, Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

export const _outerCircleStyle = (isActive: boolean): ViewStyle => ({
  width: 20,
  height: 20,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isActive ? "#fff" : "#e5e8eb",
});

export const _innerCircleStyle = (
  isActive: boolean,
  activeColor: string,
): ViewStyle => ({
  width: 12,
  height: 12,
  borderRadius: 10,
  backgroundColor: isActive ? activeColor : "#e5e8eb",
});

export const _textStyle = (isActive: boolean): TextStyle => ({
  fontWeight: "600",
  color: isActive ? "#fff" : "#757575",
});

export const _container = (
  isActive: boolean,
  activeColor: string,
): ViewStyle => ({
  backgroundColor: isActive ? activeColor : "#fff",
  height: 60,
  marginTop: 12,
  borderWidth: 1,
  borderRadius: 12,
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

import {
  ViewStyle,
  Insets,
  ImageStyle,
  TextStyle,
  StyleSheet,
} from "react-native";

interface Style {
  container: ViewStyle;
  cardListContentInset: Insets;
  listStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {},
  cardListContentInset: {
    right: 16,
  },
  listStyle: {
    paddingBottom: 24 
  }
});

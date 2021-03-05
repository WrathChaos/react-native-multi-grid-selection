import React from "react";
import { View, Text, StyleProp, TextStyle, ViewStyle } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, {
  _container,
  _outerCircleStyle,
  _innerCircleStyle,
  _textStyle,
} from "./SelectButton.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface ISelectButtonProps {
  style?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  text: string;
  isActive?: boolean;
  activeColor?: string;
  selectMode?: boolean;
  isInitialActive?: boolean;
  onPress: () => void;
}

const SelectButton: React.FC<ISelectButtonProps> = ({
  style,
  text,
  textStyle,
  isActive = false,
  activeColor = "#307ff2",
  onPress,
}) => {
  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderSingleSelectIcon = () => (
    <View style={_outerCircleStyle(isActive)}>
      <View style={_innerCircleStyle(isActive, activeColor)} />
    </View>
  );

  const renderTextContainer = () => (
    <View style={styles.textContainer}>
      <Text style={[_textStyle(isActive), textStyle]}>{text}</Text>
    </View>
  );

  return (
    <RNBounceable
      bounceEffect={0.95}
      style={[_container(isActive, activeColor), style]}
      onPress={onPress}
    >
      <View style={[styles.buttonStyle, style]}>
        {renderSingleSelectIcon()}
        {renderTextContainer()}
      </View>
    </RNBounceable>
  );
};

export default SelectButton;

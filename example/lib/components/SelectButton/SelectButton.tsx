import * as React from "react";
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
  buttonContainerStyle?: CustomStyleProp;
  buttonStyle?: CustomStyleProp;
  buttonTextStyle?: CustomTextStyleProp;
  buttonText: string;
  isActive?: boolean;
  activeColor?: string;
  selectMode?: boolean;
  isInitialActive?: boolean;
  onPress: () => void;
}

const SelectButton: React.FC<ISelectButtonProps> = ({
  buttonStyle,
  buttonContainerStyle,
  buttonText,
  buttonTextStyle,
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
      <Text style={[_textStyle(isActive), buttonTextStyle]}>{buttonText}</Text>
    </View>
  );

  return (
    <RNBounceable
      bounceEffect={0.97}
      style={[_container(isActive, activeColor), buttonContainerStyle]}
      onPress={onPress}
    >
      <View style={[styles.buttonStyle, buttonStyle]}>
        {renderSingleSelectIcon()}
        {renderTextContainer()}
      </View>
    </RNBounceable>
  );
};

export default SelectButton;

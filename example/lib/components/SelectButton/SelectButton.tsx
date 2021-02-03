import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
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

export interface ISelectButtonProps {
  style?: CustomStyleProp;
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

  return (
    <RNBounceable
      bounceEffect={0.95}
      style={[_container(isActive, activeColor), style]}
      onPress={onPress}
    >
      <View style={[styles.buttonStyle, style]}>
        {renderSingleSelectIcon()}
        <View style={styles.textContainer}>
          <Text style={_textStyle(isActive)}>{text}</Text>
        </View>
      </View>
    </RNBounceable>
  );
};

export default SelectButton;

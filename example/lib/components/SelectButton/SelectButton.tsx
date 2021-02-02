import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container, _iconContainer } from "./SelectButton.style";
import { act } from "react-test-renderer";

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
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: isActive ? "#fff" : "#e5e8eb",
      }}
    />
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
          <Text
            style={{
              fontWeight: "600",
              color: isActive ? "#fff" : "#757575",
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    </RNBounceable>
  );
};

export default SelectButton;

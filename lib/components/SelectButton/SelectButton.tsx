import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import colors from "@colors";
import Text from "@shared-components/TextWrapper/TextWrapper";
import styles, { _shadowStyle, _iconContainer } from "./SelectButton.style";

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
  selectMode = false,
  activeColor = colors.light.primary,
  onPress,
}) => {
  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderSingleSelectIcon = () => (
    <View
      style={{
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: isActive ? activeColor : "#c1c1c1",
      }}
    />
  );

  const renderMultiSelectIcon = () => (
    <Icon name="check" type="FontAwesome" size={15} color="#fff" />
  );

  return (
    <View style={_shadowStyle(isActive, activeColor)}>
      <RNBounceable
        bounceEffect={0.95}
        style={[styles.buttonStyle, style]}
        onPress={onPress}
      >
        <View style={_iconContainer(isActive, activeColor, selectMode)}>
          {selectMode ? renderSingleSelectIcon() : renderMultiSelectIcon()}
        </View>
        <View style={styles.textContainer}>
          <Text color={isActive ? activeColor : "#757575"}>{text}</Text>
        </View>
      </RNBounceable>
    </View>
  );
};

export default SelectButton;

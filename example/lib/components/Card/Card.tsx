import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Card.style";
import SelectButton from "../SelectButton/SelectButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardProps {
  style?: CustomStyleProp;
}

const Card: React.FC<ICardProps> = ({ style }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <View style={[styles.container, style]}>
      <SelectButton
        text="Every week"
        isActive={isActive}
        onPress={() => setIsActive(!isActive)}
      />
      <SelectButton text="Every other week" onPress={() => {}} />
      <SelectButton text="Twice per month" onPress={() => {}} />
      <SelectButton text="Every month" onPress={() => {}} />
    </View>
  );
};

export default Card;

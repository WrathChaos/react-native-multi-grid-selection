import React from "react";
import { View, Dimensions, FlatList, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Card.style";
import SelectButton from "../SelectButton/SelectButton";

const { width: ScreenWidth } = Dimensions.get("screen");
type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface IButtonDataType {
  id: number;
  name: string;
  data?: any;
}

interface ICardProps {
  style?: CustomStyleProp;
  data: Array<IButtonDataType>;
  onSelect: (buttonData: IButtonDataType) => void;
}

const Card: React.FC<ICardProps> = ({ style, data, onSelect }) => {
  const [selectedItem, setSelectedItem] = React.useState<
    IButtonDataType | undefined
  >(undefined);

  const handleOnSelectItem = (item: IButtonDataType) => {
    setSelectedItem(item);
    onSelect && onSelect(item);
  };

  const renderButton = (data: any) => {
    const { id, name } = data.item;
    const isActive = id === selectedItem?.id;
    return (
      <SelectButton
        text={name}
        isActive={isActive}
        onPress={() => handleOnSelectItem(data.item)}
      />
    );
  };

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={data}
        renderItem={renderButton}
        contentContainerStyle={{
          paddingLeft: 8,
          paddingRight: 8,
        }}
      />
    </View>
  );
};

export default Card;

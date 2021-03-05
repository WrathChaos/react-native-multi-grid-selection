import React from "react";
import { View, FlatList, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Card.style";
import SelectButton from "../SelectButton/SelectButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface ISelectionDataType {
  id: number;
  name: string;
  data?: any;
}

interface ICardProps {
  style?: CustomStyleProp;
  data: Array<ISelectionDataType>;
  onSelect: (buttonData: ISelectionDataType) => void;
}

const Card: React.FC<ICardProps> = ({ style, data, onSelect }) => {
  const [selectedItem, setSelectedItem] = React.useState<
    ISelectionDataType | undefined
  >(undefined);

  const handleOnSelectItem = (item: ISelectionDataType) => {
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
        contentContainerStyle={styles.listContentContainerStyle}
      />
    </View>
  );
};

export default Card;

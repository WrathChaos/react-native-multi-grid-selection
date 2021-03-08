import React from "react";
import { View, Text, FlatList, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Card.style";
import SelectButton from "../SelectButton/SelectButton";
import { IMultiSelectionDataType } from "../../MultiGridSingleSelect";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
export interface ICardSelectionDataType {
  cardId: number;
  title: string;
  selectedData: ISelectionDataType;
}

export interface ISelectionDataType {
  id: number;
  name: string;
  data?: any;
}

interface ICardProps {
  style?: CustomStyleProp;
  data: IMultiSelectionDataType;
  onSelect: (selectedOne: ICardSelectionDataType) => void;
}

const Card: React.FC<ICardProps> = ({ style, data, onSelect }) => {
  const [selectedItem, setSelectedItem] = React.useState<
    ISelectionDataType | undefined
  >(undefined);

  const handleOnSelectItem = (item: ISelectionDataType) => {
    setSelectedItem(item);
    const selectedData: ICardSelectionDataType = {
      cardId: data.cardId,
      title: data.title,
      selectedData: item,
    };
    onSelect && onSelect(selectedData);
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

  const renderHeader = () => (
    <View
      style={{
        height: 50,
        backgroundColor: "#ccc",
        justifyContent: "center",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    >
      <Text style={{ marginLeft: 12, color: "#fff", fontWeight: "bold" }}>
        {data.title}
      </Text>
    </View>
  );

  const renderList = () => (
    <FlatList
      data={data.data}
      renderItem={renderButton}
      contentContainerStyle={styles.listContentContainerStyle}
      keyExtractor={(item) => `${item.id}`}
    />
  );

  return (
    <View style={[styles.container, style]}>
      {renderHeader()}
      {renderList()}
    </View>
  );
};

export default Card;

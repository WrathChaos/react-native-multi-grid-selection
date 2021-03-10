import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Card.style";
import SelectButton from "../SelectButton/SelectButton";
import { IMultiSelectionDataType } from "../../MultiGridSingleSelect";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
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
  cardStyle?: CustomStyleProp;
  headerStyle?: CustomStyleProp;
  headerTextStyle?: CustomTextStyleProp;
  data: IMultiSelectionDataType;
  onSelect: (selectedOne: ICardSelectionDataType) => void;
}

const Card: React.FC<ICardProps> = ({
  cardStyle,
  data,
  onSelect,
  headerStyle,
  headerTextStyle,
}) => {
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
    <View style={[styles.headerStyle, headerStyle]}>
      <Text style={[styles.headerTextStyle, headerTextStyle]}>
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
    <View style={[styles.container, cardStyle]}>
      {renderHeader()}
      {renderList()}
    </View>
  );
};

export default Card;

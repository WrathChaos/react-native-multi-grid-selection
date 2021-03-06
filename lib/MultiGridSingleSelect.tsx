import * as React from "react";
import { FlatList, View, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./MultiGridSingleSelect.style";
import Card, {
  ISelectionDataType,
  ICardSelectionDataType,
  ICardProps,
} from "./components/Card/Card";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface IMultiSelectionDataType {
  cardId: number;
  title: string;
  data: Array<ISelectionDataType>;
}

export interface IMultiGridSingleSelectProps extends ICardProps {
  data: Array<IMultiSelectionDataType>;
  listStyle?: CustomStyleProp;
  onSelect: (selectedData: Array<ICardSelectionDataType>) => void;
}

interface IState {
  selectedItems: Array<ICardSelectionDataType>;
}

export default class MultiGridSingleSelect extends React.Component<
  IMultiGridSingleSelectProps,
  IState
> {
  constructor(props: IMultiGridSingleSelectProps) {
    super(props);
    this.state = {
      selectedItems: Array<ICardSelectionDataType>(),
    };
  }

  handleSelectedData = (selectedItem: ICardSelectionDataType) => {
    const { onSelect } = this.props;
    const index = this.state.selectedItems.findIndex(
      (_item) => _item.cardId === selectedItem.cardId,
    );
    if (index !== -1) {
      // Splice(Delete) the matched ID
      this.state.selectedItems.splice(index, 1);
      this.setState({ selectedItems: this.state.selectedItems }, () => {
        const joined = this.state.selectedItems.concat(selectedItem);
        this.setState(
          { selectedItems: joined },
          () => onSelect && onSelect(this.state.selectedItems),
        );
      });
    } else {
      const joined = this.state.selectedItems.concat(selectedItem);
      this.setState(
        { selectedItems: joined },
        () => onSelect && onSelect(this.state.selectedItems),
      );
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderCard = (data: any) => {
    return (
      <Card
        {...this.props}
        cardData={data.item}
        onSelectOption={(selectedOption: ICardSelectionDataType) => {
          this.handleSelectedData(selectedOption);
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList
          horizontal
          data={this.props.data}
          renderItem={this.renderCard}
          contentInset={styles.cardListContentInset}
          style={[styles.listStyle, this.props.listStyle]}
        />
      </View>
    );
  }
}

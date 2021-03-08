import React, { Component } from "react";
import { FlatList, View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./MultiGridSingleSelect.style";
import Card, {
  ISelectionDataType,
  ICardSelectionDataType,
} from "./components/Card/Card";

export interface IMultiSelectionDataType {
  cardId: number;
  title: string;
  data: Array<ISelectionDataType>;
}

interface IMultiGridSingleSelectProps {
  onSelect: (selectedData: Array<ICardSelectionDataType>) => void;
}

interface IState {
  selectedItems: Array<ICardSelectionDataType>;
}

const newData: Array<IMultiSelectionDataType> = [
  {
    cardId: 0,
    title: "Title",
    data: [
      { id: 0, name: "Every week" },
      { id: 1, name: "Every other week" },
    ],
  },
  {
    cardId: 2,
    title: "Title2",
    data: [
      { id: 0, name: "Every week2" },
      { id: 1, name: "Every other week2" },
    ],
  },
  {
    cardId: 3,
    title: "Title3",
    data: [
      { id: 0, name: "Every week3" },
      { id: 1, name: "Every other week3" },
    ],
  },
  {
    cardId: 4,
    title: "Title4",
    data: [
      { id: 0, name: "Every week4" },
      { id: 1, name: "Every other week4" },
    ],
  },
];

export default class MultiGridSingleSelect extends Component<
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
    console.log("SelectedOne: ", selectedItem);
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
        data={data.item}
        onSelect={(selectedOne: ICardSelectionDataType) => {
          this.handleSelectedData(selectedOne);
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList
          horizontal
          data={newData}
          renderItem={this.renderCard}
          contentInset={{ right: 16 }}
          style={{ paddingBottom: 24 }}
        />
      </View>
    );
  }
}

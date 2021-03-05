import React, { Component } from "react";
import { FlatList, View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./MultiGridSingleSelect.style";
import Card, { ISelectionDataType } from "./components/Card/Card";

interface IMultiGridSingleSelectProps {}

interface IState {}

const newData = [
  [
    { id: 0, name: "Every week" },
    { id: 1, name: "Every other week" },
  ],
  [
    { id: 0, name: "Every week2" },
    { id: 1, name: "Every other week2" },
  ],
  [
    { id: 0, name: "Every week3" },
    { id: 1, name: "Every other week3" },
  ],
  [
    { id: 0, name: "Every week4" },
    { id: 1, name: "Every other week5" },
  ],
];

export default class MultiGridSingleSelect extends Component<
  IMultiGridSingleSelectProps,
  IState
> {
  renderCard = (data: any) => {
    return (
      <Card
        data={data.item}
        onSelect={(selectedData: ISelectionDataType) => {
          console.log("onSelect: ", selectedData);
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList horizontal data={newData} renderItem={this.renderCard} />
      </View>
    );
  }
}

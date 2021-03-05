import React, { Component } from "react";
import { Text, View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./MultiGridSingleSelect.style";
import Card, { ISelectionDataType } from "./components/Card/Card";

interface IMultiGridSingleSelectProps {}

interface IState {}

const data = [
  { id: 0, name: "Every week" },
  { id: 1, name: "Every other week" },
];

export default class MultiGridSingleSelect extends Component<
  IMultiGridSingleSelectProps,
  IState
> {
  render() {
    return (
      <View>
        <Card
          data={data}
          onSelect={(selectedData: ISelectionDataType) => {
            console.log("onSelect: ", selectedData);
          }}
        />
      </View>
    );
  }
}

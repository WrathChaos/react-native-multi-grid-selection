import React, { Component } from "react";
import { Text, View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./MultiGridSingleSelect.style";

interface IMultiGridSingleSelectProps {}

interface IState {}

export default class MultiGridSingleSelect extends Component<
  IMultiGridSingleSelectProps,
  IState
> {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

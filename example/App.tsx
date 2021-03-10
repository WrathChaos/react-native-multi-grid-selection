import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import MultiGridSingleSelect, {
  IMultiSelectionDataType,
} from "react-native-multi-grid-selection";

const testData: Array<IMultiSelectionDataType> = [
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

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <MultiGridSingleSelect
          data={testData}
          onSelect={(selectedData: any) =>
            console.log("Selected Data: ", selectedData)
          }
        />
      </SafeAreaView>
    </>
  );
};

export default App;

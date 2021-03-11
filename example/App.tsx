import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import MultiGridSingleSelect, {
  IMultiSelectionDataType,
} from "./lib/MultiGridSingleSelect";

const testData: Array<IMultiSelectionDataType> = [
  {
    cardId: 0,
    title: "What is your favorite NBA Team?",
    data: [
      { id: 0, name: "Los Angeles Lakers" },
      { id: 1, name: "Golden State Warriors" },
      { id: 2, name: "Chicago Bulls" },
      { id: 3, name: "Boston Celtics" },
      { id: 4, name: "Cleveland" },
      { id: 5, name: "Miami Heat" },
    ],
  },
  {
    cardId: 1,
    title: "Who is the GOAT?",
    data: [
      { id: 0, name: "Micheal Jordan" },
      { id: 1, name: "Wilt Chamberlain" },
      { id: 2, name: "Lebron James" },
      { id: 3, name: "Magic Johnson" },
      { id: 4, name: "Shaquille O'Neal" },
      { id: 5, name: "Kobe Bryant" },
    ],
  },
  {
    cardId: 2,
    title: "Which team will win NBA in 2021?",
    data: [
      { id: 0, name: "Grizzlies" },
      { id: 1, name: "Wizards" },
      { id: 2, name: "Mavericks" },
      { id: 3, name: "Spurs" },
      { id: 4, name: "Hornets" },
      { id: 5, name: "Pistons" },
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

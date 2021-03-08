import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import MultiGridSingleSelect from "./lib/MultiGridSingleSelect";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <MultiGridSingleSelect
          onSelect={(selectedData: any) =>
            console.log("Selected Data: ", selectedData)
          }
        />
      </SafeAreaView>
    </>
  );
};

export default App;

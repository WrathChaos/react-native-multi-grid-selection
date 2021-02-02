import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import MultiGridSingleSelect from "./lib/MultiGridSingleSelect";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MultiGridSingleSelect />
      </SafeAreaView>
    </>
  );
};

export default App;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configurações</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1FFF3",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#052224",
  },
});

export default Settings;

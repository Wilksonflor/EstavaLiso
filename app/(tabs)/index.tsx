import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View>
      <Image source={require("../assets/images/logo.png")} />
      <Text>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

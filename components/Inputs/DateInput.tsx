import React from "react";
import { Text, View, StyleSheet, TextInputProps } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { Colors } from "../../constants/Colors";

type Props = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
} & TextInputProps;

export default function DateInput({
  label,
  value,
  onChangeText,
  ...rest
}: Props) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <MaskedTextInput
        mask="99/99/9999"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        style={styles.input}
        placeholder="DD/MM/AAAA"
        placeholderTextColor="#A0A0A0"
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    marginBottom: 4,
    color: Colors.fenceGreen,
  },
  input: {
    backgroundColor: Colors.lightGreen,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    borderWidth: 1,
    color: Colors.fenceGreen,
  },
});

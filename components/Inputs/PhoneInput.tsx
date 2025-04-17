import React from "react";
import { Text, View, StyleSheet, TextInputProps } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { Colors } from "../../constants/Colors";

type Props = {
  label?: string;
  value: string;
  onChangeText: (masked: string, unmasked: string) => void;
} & TextInputProps;

export default function PhoneInput({
  label,
  value,
  onChangeText,
  ...rest
}: Props) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <MaskedTextInput
        mask="(99) 99999-9999"
        value={value}
        onChangeText={(masked, unmasked) => onChangeText(masked)}
        keyboardType="numeric"
        style={styles.input}
        placeholder="(00) 00000-0000"
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

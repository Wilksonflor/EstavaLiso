import { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TextInputProps,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

type Props = {
  label?: string;
  isPassword?: boolean;
} & TextInputProps;

export default function Input({ label, isPassword, ...rest }: Props) {
  const [visible, setVisible] = useState(!isPassword);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          secureTextEntry={!visible}
          placeholderTextColor="#A0A0A0"
          {...rest}
        />

        {isPassword && (
          <Pressable onPress={() => setVisible(!visible)}>
            <Ionicons
              name={visible ? "eye-outline" : "eye-off-outline"}
              size={20}
              color="#A0A0A0"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
    paddingTop: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.fenceGreen,
  },
  inputWrapper: {
    // backgroundColor: Colors.honeydew,
    backgroundColor: Colors.lightGreen,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    paddingHorizontal: 16,
    borderWidth: 1,

    // borderColor: "#DFF7E2",
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: Colors.fenceGreen,
  },
});

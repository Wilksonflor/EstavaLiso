import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ViewStyle,
  TextStyle,
} from "react-native";
type Props = {
  title: string;
  onPress: () => void;
  variant?: "solid" | "outline";
  style?: ViewStyle;
  textStyle?: TextStyle;
  disable?: boolean;
};

export default function CustomBtn({
  title,
  onPress,
  variant = "solid",
  style,
  textStyle,
  disable = false,
}: Props) {
  const isOutline = variant === "outline";

  return (
    <Pressable
      onPress={onPress}
      disabled={disable}
      style={[
        styles.base,
        isOutline ? styles.outline : styles.solid,
        disable && styles.disabled,
        style,
      ]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  solid: {
    backgroundColor: "#00D09E",
  },
  outline: {
    borderWidth: 2,
    borderColor: "#00D09E",
    backgroundColor: "transparent",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: "bold",
  },
  solidText: {
    color: "#FFF",
  },
  outlineText: {
    color: "#00D09E",
  },
});

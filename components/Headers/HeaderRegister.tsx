import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

type Props = {
  title: string;
  onBackPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function HeaderRegister({
  title,
  onBackPress,
  style,
  textStyle,
}: Props) {
  return (
    <View style={[styles.container, style]}>
      {onBackPress && (
        <Pressable onPress={onBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
      )}
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.carabianGreen,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    color: "#052224",
    textAlign: "center",
    fontWeight: "bold",
  },
});

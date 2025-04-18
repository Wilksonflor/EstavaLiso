import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Colors } from "../constants/Colors";
export default function Index() {
  const handleLogin = () => {
    router.push("/(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo1.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>EstavaLiso</Text>
      <Text style={styles.subtitle}>Grana no controle. Vida no fluxo!</Text>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
        <Pressable
          style={styles.buttonOutline}
          onPress={() => router.push("/signUp")}
        >
          <Text style={styles.buttonTextOutline}>Cadastra-se</Text>
        </Pressable>
      </View>

      <Pressable>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1FFF3",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 5,
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    color: Colors.carabianGreen,
    marginBottom: 5,

    // fontFamily: "Poppins",
  },
  subtitle: {
    fontSize: 14,
    color: Colors.Cyprus,
    marginBottom: 40,
  },
  buttonsContainer: {
    width: "100%",
    gap: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00D09E",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonOutline: {
    borderColor: "#00D09E",
    borderWidth: 2,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonTextOutline: {
    color: "#00D09E",
    fontWeight: "bold",
  },
  forgot: {
    color: Colors.void,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});

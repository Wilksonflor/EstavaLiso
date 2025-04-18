import HeaderRegister from "@/components/Headers/HeaderRegister";
import Input from "@/components/Inputs/CustomInput";
import PhoneInput from "@/components/Inputs/PhoneInput";
import CustomBtn from "@/components/Buttons/CustomBtn";
import { router } from "expo-router";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import DateInput from "@/components/Inputs/DateInput";
import { useAuth } from "@/context/AuthContext";

export default function SignUp() {
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: name.trim() ? "" : "Nome é obrigatório",
      email: email.trim() ? "" : "Email é obrigatório",
      phone: phone.trim() ? "" : "Celular é obrigatório",
      birthDate: birthDate.trim() ? "" : "Data de nascimento é obrigatória",
      password: password.trim() ? "" : "Senha é obrigatória",
      confirmPassword:
        confirmPassword.trim() !== password.trim()
          ? "As senhas não coincidem"
          : "",
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => err === "");
  };

  const handleRegister = async () => {
    if (validateForm()) {
      try {
        await signUp({ name, email }, password);
        console.log("Usuário cadastrado com sucesso!");
        router.push("/");
      } catch (err: any) {
        console.error("Erro ao cadastrar usuário:", err.message);
        setError(err.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <HeaderRegister
        title="Crie sua conta"
        onBackPress={() => router.back()}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <ScrollView contentContainerStyle={styles.form}>
        <Input
          label="Nome completo"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
        {errors.name && <Text style={styles.error}>{errors.name}</Text>}

        <Input
          label="Email"
          placeholder="exemplo@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <PhoneInput label="Celular" value={phone} onChangeText={setPhone} />
        {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

        <DateInput
          label="Data de nascimento"
          placeholder="DD / MM / AAAA"
          value={birthDate}
          onChangeText={setBirthDate}
        />
        {errors.birthDate && (
          <Text style={styles.error}>{errors.birthDate}</Text>
        )}

        <Input
          label="Senha"
          placeholder="********"
          isPassword
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <Input
          label="Confirmar senha"
          placeholder="********"
          isPassword
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword}</Text>
        )}

        <CustomBtn
          style={styles.button}
          onPress={handleRegister}
          title="Cadastrar"
          variant="solid"
        />

        <CustomBtn
          onPress={() => router.push("/")}
          title="Já tenho uma conta"
          variant="outline"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.honeydew,
  },
  form: {
    padding: 20,
    gap: 5,
  },
  button: {
    backgroundColor: Colors.carabianGreen,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    marginTop: -10,
    marginBottom: 10,
    paddingLeft: 4,
  },
});

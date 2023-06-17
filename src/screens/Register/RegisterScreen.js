import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Auth } from 'aws-amplify';
import { styles } from "./RegisterStyles";

const RegisterScreen = ({ navigation }) => {
  const goToLoginScreen = () => {
    navigation.navigate("Login");
  };

  const goToConfirmationScreen = (user) => {
    navigation.navigate("Confirmation", { user });
  };

  const [given_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
  
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          given_name
        }
      });
      console.log("User created successfully:", user);
      goToConfirmationScreen(user);
    } catch (error) {
      console.log("Error signing up:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.image} />

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={given_name}
          placeholderTextColor="#ffffff"
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          placeholderTextColor="#ffffff"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          placeholderTextColor="#ffffff"
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Repetir Contraseña"
          secureTextEntry
          value={repeatPassword}
          placeholderTextColor="#ffffff"
          onChangeText={setRepeatPassword}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginLinkContainer}>
        <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={goToLoginScreen}>
          <Text style={styles.loginLink}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

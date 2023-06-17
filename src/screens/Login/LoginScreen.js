import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginStyles";

const LoginScreen = ({ navigation }) => {
  const goToRegisterScreen = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.image} />

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ej: 50558169980"
          placeholderTextColor="#ffffff"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Escriba su contraseña"
          placeholderTextColor="#ffffff"
          secureTextEntry
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerLinkContainer}>
        <Text style={styles.registerText}>¿No tienes cuenta?, </Text>
        <TouchableOpacity onPress={goToRegisterScreen}>
          <Text style={styles.registerLink}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

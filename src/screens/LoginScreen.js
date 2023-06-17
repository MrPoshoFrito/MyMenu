import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/quiyana.jpeg")} style={styles.image} />

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
        <TouchableOpacity>
          <Text style={styles.registerLink}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEA14C",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  inputsContainer: {
    width: "80%",
  },
  input: {
    height: 50,
    backgroundColor: "#ED5C86",
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    color: "#ffffff",
  },
  buttonContainer: {
    backgroundColor: "#eb3fc7",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerLinkContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerText: {
    color: "#ffffff",
    fontSize: 16,
  },
  registerLink: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;

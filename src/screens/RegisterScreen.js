import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/quiyana.jpeg")} style={styles.image} />

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#ffffff"
          secureTextEntry
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginLinkContainer}>
        <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEEAEC",
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
    backgroundColor: "#FFC6C8",
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    color: "#ffffff",
  },
  buttonContainer: {
    backgroundColor: "#FF767B",
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
  loginLinkContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginText: {
    color: "#FF767B",
    fontSize: 16,
  },
  loginLink: {
    color: "#FF767B",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen;

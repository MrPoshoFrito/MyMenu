import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./HomeStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToLoginScreen = () => {
    navigation.navigate("Login");
  };

  const goToRegisterScreen = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.image} />

      <TouchableOpacity style={styles.buttonContainer} onPress={goToLoginScreen}>
        <Text style={styles.buttonText}>Inicia Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={goToRegisterScreen}>
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>

      <Text style={styles.description}>¡Bienvenido a MyMenu! Aquí encontrarás la mejor comida de la zona. ¡Entra ahora!</Text>
    </View>
  );
};

export default HomeScreen;

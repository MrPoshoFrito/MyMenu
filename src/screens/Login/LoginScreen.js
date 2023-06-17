import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Auth } from 'aws-amplify';
import { styles } from "./LoginStyles";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const goToRegisterScreen = () => {
    navigation.navigate("Register");
  };

  const goToCRUDScreen = (user) => {
    navigation.navigate("Crud", { user });
  };

  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      console.log("User signed in:", user);
      goToCRUDScreen(user)
      
    } catch (error) {
      console.log('Error signing in:', error);
      setError("Invalid username or password");
    }
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
    setError("");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setError("");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.image} />

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ej: steven@baldelomar.com"
          placeholderTextColor="#ffffff"
          keyboardType="email-address"
          autoCapitalize="none"
          value={username}
          onChangeText={handleUsernameChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Escriba su contraseña"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={signIn}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

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

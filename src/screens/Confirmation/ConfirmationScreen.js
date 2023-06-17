import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Auth } from 'aws-amplify';
import styles from "./ConfirmationStyles";

const ConfirmationScreen = ({ route }) => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  const { email } = route.params;

  const handleConfirmation = async () => {
    if (confirmationCode.length === 6) {
      try {
        await Auth.confirmSignUp(email, confirmationCode);
        console.log("User confirmed successfully");

        // Perform any additional actions after successful confirmation

        // If user didn't get a confirmation code, you can use resendSignUp function to send a new one.

      } catch (error) {
        console.log("Error confirming user:", error);
        setError("Invalid confirmation code");
      }
    } else {
      setError("Please enter a 6-digit code");
    }
  };

  const handleCodeChange = (value, index) => {
    const newCode = [...confirmationCode];
    newCode[index] = value;
    setConfirmationCode(newCode.join(""));
    setError("");

    if (index < inputsRef.current.length - 1 && value !== "") {
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation Code:</Text>
      <View style={styles.inputContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={confirmationCode[index] || ""}
            onChangeText={(value) => handleCodeChange(value, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputsRef.current[index] = ref)}
            onSubmitEditing={handleConfirmation}
          />
        ))}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleConfirmation}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmationScreen;

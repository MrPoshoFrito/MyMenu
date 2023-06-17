import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./CRUDStyles";
import Table from "../../components/Table/TableComponent";

const CRUDScreen = ({ navigation }) => {
  const handleDelete = () => {
    // Handle the delete action
  };

  const handleUpdate = () => {
    // Handle the update action
  };

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    // Add more user data as needed
  ];

  return (
    <View style={styles.container}>
      <Table data={users} />

      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update Information</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CRUDScreen;

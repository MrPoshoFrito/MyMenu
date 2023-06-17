import React from "react";
import { View, Text } from "react-native";
import { styles } from "./TableStyles";

const Table = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>ID</Text>
        <Text style={styles.header}>Name</Text>
        <Text style={styles.header}>Email</Text>
      </View>

      {data.map((user) => (
        <View key={user.id} style={styles.row}>
          <Text style={styles.cell}>{user.id}</Text>
          <Text style={styles.cell}>{user.name}</Text>
          <Text style={styles.cell}>{user.email}</Text>
        </View>
      ))}
    </View>
  );
};

export default Table;

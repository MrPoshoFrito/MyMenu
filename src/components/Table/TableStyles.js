import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 20,
    padding: 10,
    width: "100%", // Set the width to 100% to occupy the entire available space
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingVertical: 5,
  },
  header: {
    fontWeight: "bold",
    flex: 1, // Allow the header cells to take up equal width
    marginLeft: 10,
  },
  cell: {
    flex: 1, // Allow the data cells to take up equal width
    marginLeft: 10,
  },
});

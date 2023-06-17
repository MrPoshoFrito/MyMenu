import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

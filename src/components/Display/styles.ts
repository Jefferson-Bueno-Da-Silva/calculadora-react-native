import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "flex-end",
    width: Dimensions.get("window").width,
  },
  displayValue: {
    fontSize: 60,
    color: "#FFF",
  },
});

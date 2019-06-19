import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 8,
    padding: 15,
    overflow: "hidden",
    height: 60,
    minWidth: 160,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5
  },
  upperLeftPokeball: {
    height: 90,
    width: 90,
    position: "absolute",
    top: -50,
    left: -65
  },
  lowerRightPokeball: {
    height: 90,
    width: 90,
    position: "absolute",
    right: -30,
    bottom: -45
  },
  text: { fontSize: 19, width: "100%", textAlignVertical: "center" }
});

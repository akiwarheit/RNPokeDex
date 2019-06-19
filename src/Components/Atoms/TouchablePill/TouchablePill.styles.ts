import { StyleSheet } from "react-native";
import { Colours } from "../../../../assets";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 8,
    padding: 15,
    overflow: "hidden",
    height: 60,
    minWidth: 160,
    justifyContent: "center"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  upperLeftPokeball: {
    height: 90,
    width: 90,
    position: "absolute",
    top: -50,
    left: -65,
    tintColor: Colours.White,
    opacity: 0.1
  },
  lowerRightPokeball: {
    height: 90,
    width: 90,
    position: "absolute",
    right: -30,
    bottom: -45,
    tintColor: Colours.White,
    opacity: 0.1
  },
  text: {
    fontSize: 19,
    width: "100%",
    textAlignVertical: "center"
  }
});

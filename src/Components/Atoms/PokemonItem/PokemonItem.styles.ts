import { StyleSheet } from "react-native";
import { Colours } from "../../../../assets";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 8,
    backgroundColor: "#46D0A7",
    padding: 15,
    minHeight: 110,
    minWidth: 130,
    overflow: "hidden"
  },
  row: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },
  column: { flex: 1, flexDirection: "column" },
  image: { height: 90, width: 90 },
  lowerRightPokeball: {
    height: 90,
    width: 90,
    position: "absolute",
    tintColor: Colours.White,
    opacity: 0.3
  },
  name: {
    fontSize: 19,
    width: "100%",
    textAlignVertical: "center"
  }
});

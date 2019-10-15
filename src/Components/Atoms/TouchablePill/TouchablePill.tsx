import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle
} from "react-native";
import { Images, Colours } from "@assets/index";
import { material } from "react-native-typography";
import Styles from "./TouchablePill.styles";
import { BaseStyles } from "../BaseStyles";

interface Props {
  text: string;
  onPress(): void;
  type:
    | "grass"
    | "fire"
    | "water"
    | "electric"
    | "dark"
    | "ground"
    | "steel"
    | "dragon";
  style?: StyleProp<ViewStyle>;
}

export default function TouchablePill(props: Props) {
  const titleType = `${props.type
    .charAt(0)
    .toUpperCase()}${props.type.substring(1)}`;

  const Colour = Colours[titleType];

  return (
    <TouchableOpacity onPress={props.onPress} style={BaseStyles.shadow}>
      <View
        style={[
          Styles.container,
          {
            backgroundColor: Colour
          },
          props.style
        ]}
      >
        <Image source={Images.Subtract} style={[Styles.upperLeftPokeball]} />
        <Image source={Images.Subtract} style={[Styles.lowerRightPokeball]} />
        <Text style={[material.buttonWhiteObject, Styles.text]}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

import React from "react";
import { View, Text } from "react-native";
import { material } from "react-native-typography";
import TypeStyles from "./Type.styles";

interface Props {
  index: number;
  type: string;
}

export default function Type(props: Props) {
  return (
    <View style={TypeStyles.type} key={`${props.index}_${props.type}`}>
      <Text style={[material.body1White, TypeStyles.typeText]}>
        {props.type}
      </Text>
    </View>
  );
}

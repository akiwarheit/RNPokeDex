import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity
} from "react-native";
import { PokeDexListItem } from "@domains/Pokemon/types";
import Styles from "./PokemonItem.styles";
import { BaseStyles } from "../BaseStyles";
import { Images, Colours } from "@assets/index";
import { material } from "react-native-typography";
import Type from "../Type/Type";

interface Props {
  pokemon: PokeDexListItem;
  onPress(): void;
  style?: StyleProp<ViewStyle>;
  touchableStyle?: StyleProp<ViewStyle>;
}

export default function PokemonItem(props: Props) {
  const titleType = `${props.pokemon.types[0]
    .charAt(0)
    .toUpperCase()}${props.pokemon.types[0].substring(1)}`;

  const backgroundColor = Colours[titleType];

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[props.touchableStyle, BaseStyles.shadow]}
    >
      <View style={[Styles.container, props.style, { backgroundColor }]}>
        <View style={Styles.column}>
          <Text
            style={[
              material.buttonWhiteObject,
              Styles.name,
              { marginBottom: 3 }
            ]}
          >
            {props.pokemon.name}
          </Text>
          {props.pokemon.types.map((type: string, index: number) => (
            <Type type={type} index={index} />
          ))}
        </View>
        <View style={{ position: "absolute", bottom: -10, right: -10 }}>
          <Image source={Images.Subtract} style={[Styles.lowerRightPokeball]} />
          <Image
            source={{ uri: props.pokemon.sprite }}
            style={Styles.image}
            resizeMode="stretch"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

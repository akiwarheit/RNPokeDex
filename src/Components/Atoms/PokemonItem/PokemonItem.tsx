import React from "react";
import { View, Text, Image } from "react-native";
import { PokeDexListItem } from "../../../Domains/Pokemon/types";

interface Props {
  pokemon: PokeDexListItem;
}

export default function PokemonItem(props: Props) {
  return (
    <View
      style={{
        flexDirection: "column",
        borderRadius: 8,
        backgroundColor: "#46D0A7",
        padding: 15
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text>{props.pokemon.id}</Text>
          {props.pokemon.types.map(type => (
            <Text>{type}</Text>
          ))}
        </View>
        <Image
          source={{ uri: props.pokemon.sprite }}
          style={{ height: 50, width: 50, alignSelf: "flex-end" }}
        />
      </View>
    </View>
  );
}

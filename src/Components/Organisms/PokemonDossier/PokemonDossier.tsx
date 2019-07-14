import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import PokemonDossierStyles from "./PokemonDossier.styles";
import { PokeDexListItem } from "../../../Domains/Pokemon/types";

interface Props {
  pokemon: PokeDexListItem;
}

export default function PokemonDossier(props: Props) {
  return (
    <View style={PokemonDossierStyles.container}>
      <View>
        <View>
          <Text>{props.pokemon.name}</Text>
          <Text>#{props.pokemon.id}</Text>
        </View>
        <View>
          <Text />
        </View>
      </View>
      <View>
        <Image source={{ uri: props.pokemon.sprite }} />
      </View>
    </View>
  );
}

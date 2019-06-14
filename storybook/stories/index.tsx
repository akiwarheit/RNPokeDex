import React from "react";
import { storiesOf } from "@storybook/react-native";

import { View, StyleSheet } from "react-native";
import PokemonList from "../../src/Components/Atoms/PokemonList/PokemonList";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 150
  }
});

const CenteredView = ({ children }) => (
  <View style={style.container}>{children}</View>
);

const DATA = [
  {
    id: 1,
    name: "Bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: ["grass"]
  },
  {
    id: 2,
    name: "Ivysaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    types: ["grass"]
  },
  {
    id: 3,
    name: "Venasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    types: ["grass"]
  }
];

storiesOf("Atoms", module).add("PokemonList", () => (
  <CenteredView>
    <PokemonList pokemons={DATA} />
  </CenteredView>
));

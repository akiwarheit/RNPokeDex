import React from "react";
import { storiesOf } from "@storybook/react-native";

import { View, StyleSheet } from "react-native";
import PokemonList from "../../src/Components/Molecules/PokemonList/PokemonList";
import PokemonItem from "../../src/Components/Atoms/PokemonItem/PokemonItem";
import TouchablePill from "../../src/Components/Atoms/TouchablePill/TouchablePill";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 40
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
    types: ["grass", "poison"]
  },
  {
    id: 3,
    name: "Venasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    types: ["grass", "poison"]
  },
  {
    id: 4,
    name: "Charmander",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    types: ["fire"]
  },
  {
    id: 5,
    name: "Charmeleon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    types: ["fire"]
  },
  {
    id: 6,
    name: "Charizard",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    types: ["fire"]
  },
  {
    id: 107,
    name: "Hitmonchan",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    types: ["fighting"]
  },
  {
    id: 150,
    name: "Mewtwo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    types: ["psychic"]
  },
  {
    id: 35,
    name: "Clefairy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    types: ["fairy"]
  },
  {
    id: 25,
    name: "Pikachu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    types: ["electric"]
  },
  {
    id: 93,
    name: "Haunter",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    types: ["ghost"]
  },
  {
    id: 304,
    name: "Aron",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    types: ["steel", "ground"]
  }
];

storiesOf("Atoms", module).add(
  "TouchablePill - How to properly use them",
  () => (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        width: "100%",
        padding: 15,
        marginVertical: 40
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly"
        }}
      >
        <TouchablePill type="grass" text="Send" onPress={() => {}} />
        <TouchablePill type="dark" text="Nudes" onPress={() => {}} />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly"
        }}
      >
        <TouchablePill type="electric" text="Send" onPress={() => {}} />
        <TouchablePill type="water" text="Nudes" onPress={() => {}} />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly"
        }}
      >
        <TouchablePill
          type="ground"
          text="Send Nudes"
          onPress={() => {}}
          style={{ minWidth: "100%" }}
        />
      </View>
    </View>
  )
);

storiesOf("Atoms", module).add("PokemonItem", () => (
  <View style={{ marginTop: 100 }}>
    {DATA.map(pokemon => (
      <PokemonItem
        pokemon={pokemon}
        style={{ width: 150 }}
        onPress={() => {}}
      />
    ))}
  </View>
));

storiesOf("Molecules", module).add("PokemonList", () => (
  <CenteredView>
    <PokemonList pokemons={DATA} />
  </CenteredView>
));

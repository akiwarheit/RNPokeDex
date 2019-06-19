import React from "react";
import { storiesOf } from "@storybook/react-native";

import { View, StyleSheet } from "react-native";
import PokemonList from "../../src/Components/Molecules/PokemonList/PokemonList";
import PokemonItem from "../../src/Components/Atoms/PokemonItem/PokemonItem";
import TouchablePill from "../../src/Components/Atoms/TouchablePill/TouchablePill";
import { PokeDexListItem } from "../../src/Domains/Pokemon/types";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 40,
    marginBottom: 40
  }
});

const CenteredView = ({ children }) => (
  <View style={style.container}>{children}</View>
);

const DATA = require("../../Fixtures/ViewObjects/PokedexListItems.json").sort(
  (p1: PokeDexListItem, p2: PokeDexListItem) => p1.id > p2.id
);

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

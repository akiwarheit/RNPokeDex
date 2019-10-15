import React from "react";
import { storiesOf } from "@storybook/react-native";

import { View, StyleSheet } from "react-native";
import PokemonList from "@components/Molecules/PokemonList/PokemonList";
import PokemonItem from "@components//Atoms/PokemonItem/PokemonItem";
import TouchablePill from "@components/Atoms/TouchablePill/TouchablePill";
import { PokeDexListItem } from "@domains/Pokemon/types";

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
    <View style={{ flex: 1, flexShrink: 1 }}>
      <View style={{ flex: 2, flexDirection: "row", marginTop: 40 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            margin: 5
          }}
        >
          <TouchablePill type="water" text="Send" onPress={() => {}} />
          <TouchablePill
            type="grass"
            text="Memes"
            onPress={() => {}}
            style={{ marginTop: 5 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            margin: 5
          }}
        >
          <TouchablePill type="fire" text="Send" onPress={() => {}} />
          <TouchablePill
            type="steel"
            text="Memes"
            onPress={() => {}}
            style={{ marginTop: 5 }}
          />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <TouchablePill
          type="dark"
          text=" Send Memes"
          onPress={() => {}}
          style={{ margin: 5 }}
        />
      </View>
    </View>
  )
);

storiesOf("Atoms", module).add("PokemonItem", () => (
  <View style={{ marginTop: 100 }}>
    <PokemonItem pokemon={DATA[0]} style={{ width: 300 }} onPress={() => {}} />
    <PokemonItem
      pokemon={DATA[3]}
      style={{ width: "100%" }}
      onPress={() => {}}
    />
    <PokemonItem pokemon={DATA[6]} style={{ width: 150 }} onPress={() => {}} />
  </View>
));

storiesOf("Molecules", module).add("PokemonList", () => (
  <CenteredView>
    <PokemonList pokemons={DATA} />
  </CenteredView>
));

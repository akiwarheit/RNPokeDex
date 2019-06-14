import React, { Component } from "react";
import { FlatList, View, Text, Image } from "react-native";
import { PokeDexListItem } from "../../../Domains/Pokemon/types";

interface Props {
  pokemons: PokeDexListItem[];
}

interface State {}

export default class PokemonList extends Component<Props, State> {
  renderPokemon = ({ item }: { item: PokeDexListItem }) => (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center"
        }}
      >
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
        <Image
          source={{ uri: item.sprite }}
          style={{ height: 50, width: 50 }}
        />
      </View>
    </View>
  );

  render() {
    return (
      <FlatList
        contentContainerStyle={{ flex: 1, width: "100%" }}
        style={{ flex: 1, width: "100%" }}
        data={this.props.pokemons}
        renderItem={this.renderPokemon}
        keyExtractor={(item: PokeDexListItem, index: number) => `${index}`}
      />
    );
  }
}

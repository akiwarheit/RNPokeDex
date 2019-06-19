import React, { Component } from "react";
import { FlatList, View, Text, Image } from "react-native";
import { PokeDexListItem } from "../../../Domains/Pokemon/types";
import PokemonItem from "../../Atoms/PokemonItem/PokemonItem";

interface Props {
  pokemons: PokeDexListItem[];
}

interface State {}

export default class PokemonList extends Component<Props, State> {
  renderPokemon = ({ item }: { item: PokeDexListItem }) => (
    <PokemonItem pokemon={item} onPress={() => {}} style={{ minWidth: 165 }} />
  );

  render() {
    return (
      <FlatList
        data={this.props.pokemons}
        renderItem={this.renderPokemon}
        numColumns={2}
        columnWrapperStyle={{
          alignContent: "space-between",
          alignItems: "center"
        }}
        keyExtractor={(item: PokeDexListItem, index: number) =>
          `${item.id}_${index}`
        }
      />
    );
  }
}

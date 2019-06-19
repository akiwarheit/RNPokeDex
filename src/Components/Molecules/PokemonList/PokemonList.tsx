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
    <PokemonItem pokemon={item} />
  );

  render() {
    return (
      <FlatList
        contentContainerStyle={{
          flex: 1,
          width: "100%"
        }}
        style={{ flex: 1, width: "100%" }}
        data={this.props.pokemons}
        renderItem={this.renderPokemon}
        numColumns={2}
        keyExtractor={(item: PokeDexListItem, index: number) =>
          `${item.id}_${index}`
        }
      />
    );
  }
}

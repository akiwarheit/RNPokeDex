import React, { Component } from "react";
import { FlatList } from "react-native";
import { PokeDexListItem } from "@domains/Pokemon/types";
import PokemonItem from "@components/Atoms/PokemonItem/PokemonItem";

interface Props {
  pokemons: PokeDexListItem[];
}

const renderPokemon = ({ item }: { item: PokeDexListItem }) => (
  <PokemonItem
    pokemon={item}
    onPress={() => {}}
    style={{ minWidth: 165 }}
    touchableStyle={{ padding: 5 }}
  />
);

export default function PokemonList(props: Props) {
  return (
    <FlatList
      data={props.pokemons}
      renderItem={renderPokemon}
      showsVerticalScrollIndicator={false}
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

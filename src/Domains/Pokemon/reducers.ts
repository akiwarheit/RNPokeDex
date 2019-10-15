import { createReducer, match } from "re-reduced";
import { PokemonActions } from "./actions";
import { PokemonState } from "./types";

const INITIAL_STATE: PokemonState = {};

export const PokemonReducer = createReducer<PokemonState>(
  [
    match(PokemonActions.fetchPokemon, state => ({
      ...state
    }))
  ],
  INITIAL_STATE
);

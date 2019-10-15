import { createActions } from "re-reduced";

export const PokemonActions = createActions(create => ({
  fetchPokemon: create.asyncAction()
}));

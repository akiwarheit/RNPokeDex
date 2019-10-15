import { createStore, combineReducers } from "redux";
import { PokemonReducer } from "@domains/Pokemon/reducers";

let store;

export default function() {
  store = createStore(
    combineReducers({
      pokemon: PokemonReducer
    })
  );
}

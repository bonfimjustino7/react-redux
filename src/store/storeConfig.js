import { createStore, combineReducers } from "redux";
import numeroReducers from "./reducers/numeroReducers";

const reducers = combineReducers({
  numeros: numeroReducers,
  // nomes: function (state, action) {
  //   return {
  //     nomes: ["Bonfim", "Diego", "Allyson"],
  //   };
  // },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;

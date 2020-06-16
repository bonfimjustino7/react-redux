import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from "../actions/actionsTypes";

const estadoInicial = {
  min: 1,
  max: 10,
};

export default function numerosReducers(state = estadoInicial, action) {
  switch (action.type) {
    case NUM_MIN_ALTERADO:
      return {
        ...state,
        min: action.payload,
      };

    case NUM_MAX_ALTERADO:
      return {
        ...state,
        max: action.payload,
      };

    default:
      return state;
  }
}

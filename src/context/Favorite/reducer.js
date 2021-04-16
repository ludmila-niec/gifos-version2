import * as types from "./actionTypes";

export function localReducer(state, action) {
  switch (action.type) {
    case types.ADD_LOCAL_FAVORITE:
      const { id } = action.payload;
      return [id, ...state];
    case types.REMOVE_LOCAL_FAVORITE:
      return state.filter((id) => id !== action.payload.id);
    default:
      return state;
  }
}
export function favoritesReducer(state, action) {
  switch (action.type) {
    case types.GET_FAVORITES:
      return action.payload.data;
    case types.ADD_FAVORITE:
      const { data } = action.payload;
      return [data, ...state];
    case types.REMOVE_FAVORITE:
      return state.filter((gif) => gif.id !== action.payload.id);
    default:
      return state;
  }
}

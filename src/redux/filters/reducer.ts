import { COLOR_CHANGE, STATUS_CHANGE } from "./actionTypes";
import { FilterAction } from "./actions";

export interface FilterModel {
  status: string;
  colors: string[];
}

const initialState: FilterModel = {
  status: "All",
  colors: [],
};

const reducer = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case STATUS_CHANGE:
      return {
        ...state,
        status: action.payload.status,
      };
    case COLOR_CHANGE:
      switch (action.payload.changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, action.payload.color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (color) => color !== action.payload.color
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default reducer;

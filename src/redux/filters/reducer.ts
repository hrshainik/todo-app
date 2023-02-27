import { COLOR_CHANGE, STATUS_CHANGE } from "./actionTypes";
import { FilterAction } from "./actions";

const initialState = {
  status: "",
  colors: [],
};

const reducer = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case STATUS_CHANGE:
      break;
    case COLOR_CHANGE:
      break;
    default:
      return state;
  }
};

export default reducer;

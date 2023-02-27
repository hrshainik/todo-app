import { combineReducers } from "redux";
import todosReducer from "./todos/reducer";
import filtersReducer from "./filters/reducer";

const reducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default reducer;

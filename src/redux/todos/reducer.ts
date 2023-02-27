import { TodoAction } from "./actions";
import {
  ADD_TODO,
  CLEAR_COMPLETE_TODOS,
  COLOR_SELECT_TODO,
  COMPLETE_ALL_TODOS,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

export interface TodoModel {
  id: number;
  text: string;
  completed: boolean;
  color?: string;
}

const initialState: TodoModel[] = [];

let id: number;
const uid = (() => ((id = 0), () => id++))();

const reducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state.map((todo) => ({ ...todo })),
        {
          id: uid(),
          text: action.payload?.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload?.id) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
    case COLOR_SELECT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload?.id) {
          todo.color = action.payload?.color;
          return todo;
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload?.id);
    case COMPLETE_ALL_TODOS:
      return state.map((todo) => {
        todo.completed = true;
        return todo;
      });
    case CLEAR_COMPLETE_TODOS:
      return state.filter((todo) => todo.completed !== true);
    default:
      return state;
  }
};

export default reducer;

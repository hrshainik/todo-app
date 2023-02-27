import { TodoAction } from "./actions";
import {
  ADD_TODO,
  CLEAR_COMPLETE_TODOS,
  COLOR_SELECT_TODO,
  COMPLETE_ALL_TODOS,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

const initialState: object[] = [
  {
    id: 0,
    text: "Learn ReactJS",
    completed: true,
    color: "green",
  },
  {
    id: 1,
    text: "Learn Redux",
    completed: false,
    color: "red",
  },
];

const reducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      const lastTodo: any = state[state.length - 1];
      const newTodo = {
        id: lastTodo.id + 1,
        text: action.payload.text,
        completed: false,
      };
      return [...state, newTodo];
    case TOGGLE_TODO:
      return state.map((todo: any) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
    case COLOR_SELECT_TODO:
      return state.map((todo: any) => {
        if (todo.id === action.payload.id) {
          todo.color = action.payload.color;
          return todo;
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo: any) => todo.id !== action.payload.id);
    case COMPLETE_ALL_TODOS:
      return state.map((todo: any) => {
        todo.completed = true;
        return todo;
      });
    case CLEAR_COMPLETE_TODOS:
      return state.filter((todo: any) => todo.completed !== true);
    default:
      return state;
  }
};

export default reducer;

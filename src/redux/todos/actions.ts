import {
  ADD_TODO,
  CLEAR_COMPLETE_TODOS,
  COLOR_SELECT_TODO,
  COMPLETE_ALL_TODOS,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

export interface TodoAction {
  type: string;
  payload?: { text?: string; id?: number; color?: string };
}

export const todoAdded = (text: string): TodoAction => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const todoToggled = (id: number): TodoAction => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const todoColorSelected = (id: number, color: string): TodoAction => ({
  type: COLOR_SELECT_TODO,
  payload: {
    id,
    color,
  },
});

export const todoDeleted = (id: number): TodoAction => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const todosCompleted = (): TodoAction => ({
  type: COMPLETE_ALL_TODOS,
});

export const completedTodosCleared = (): TodoAction => ({
  type: CLEAR_COMPLETE_TODOS,
});

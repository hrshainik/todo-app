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
  payload: { text?: string; id?: number; color?: string };
}

export const todoAdded = (text: string): object => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const todoToggled = (id: number): object => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const todoColorSelected = (id: number, color: string): object => ({
  type: COLOR_SELECT_TODO,
  payload: {
    id,
    color,
  },
});

export const todoDeleted = (id: number): object => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const todosCompleted = (): object => ({
  type: COMPLETE_ALL_TODOS,
});

export const completedTodosCleared = (): object => ({
  type: CLEAR_COMPLETE_TODOS,
});

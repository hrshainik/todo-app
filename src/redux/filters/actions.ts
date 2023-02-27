import { COLOR_CHANGE, STATUS_CHANGE } from "./actionTypes";

export type FilterAction =
  | { type: string; payload: { status: string } }
  | { type: string; payload: { color: string; changeType: string } };

export const filteredByStatus = (status: string): object => ({
  type: STATUS_CHANGE,
  payload: {
    status,
  },
});

export const filteredByColor = (color: string, changeType: string): object => ({
  type: COLOR_CHANGE,
  payload: {
    color,
    changeType,
  },
});

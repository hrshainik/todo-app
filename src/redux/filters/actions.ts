import { COLOR_CHANGE, STATUS_CHANGE } from "./actionTypes";

export interface FilterAction {
  type: string;
  payload: {
    status?: string;
    color?: string;
    changeType?: string;
  };
}

export const filteredByStatus = (status: string): FilterAction => ({
  type: STATUS_CHANGE,
  payload: {
    status,
  },
});

export const filteredByColor = (
  color: string,
  changeType: string
): FilterAction => ({
  type: COLOR_CHANGE,
  payload: {
    color,
    changeType,
  },
});

import { SELECT_FILTER, UNSELECT_FILTER, UNSELECT_ALL_FOR_FILTER, UNSELECT_ALL_FILTERS } from "../Types/types";

export const selectFilter = (data) => (dispatch) => {
  dispatch({
    type: SELECT_FILTER,
    payload: {
      data,
    },
  });
};

export const unSelectFilter = (data) => (dispatch) => {
  dispatch({
    type: UNSELECT_FILTER,
    payload: {
      data,
    },
  });
};

export const unSelectAllForFilter = (data) => (dispatch) => {
  dispatch({
    type: UNSELECT_ALL_FOR_FILTER,
    payload: {
      data,
    },
  });
};

export const unSelectAllFilters = () => (dispatch) => {
  dispatch({
    type: UNSELECT_ALL_FILTERS
  });
};

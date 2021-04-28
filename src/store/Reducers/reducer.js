import {
  SELECT_FILTER,
  UNSELECT_FILTER,
  UNSELECT_ALL_FOR_FILTER,
  UNSELECT_ALL_FILTERS,
} from "../Types/types";

export const appliedFilters = (state = {}, action) => {
  switch (action.type) {
    case SELECT_FILTER:
      let _state = { ...state };
      _state[action.payload.data.filterName] = [
        ...action.payload.data.filterSelections,
      ];

      return _state;

    case UNSELECT_FILTER:
      let __state = { ...state };
      __state[action.payload.data.filterName] = __state[
        action.payload.data.filterName
      ].filter((el) => el.id !== action.payload.data.filterId);

      return __state;

    case UNSELECT_ALL_FOR_FILTER:
      let currentState = { ...state };
      delete currentState[action.payload.data.filterName];
      return currentState;

    case UNSELECT_ALL_FILTERS:
      return {};
    default:
      return state;
  }
};

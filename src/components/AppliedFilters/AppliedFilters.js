import React, { Fragment } from "react";
import {
  AppliedFiltersWrapper,
  SelectedFiltersWrapper,
  SelectedFilterWrapper,
  ElementsTitleWrapper,
} from "../../styles/General";
import { useSelector, useDispatch } from "react-redux";
import {
  unSelectFilter,
  unSelectAllFilters,
} from "../../store/Actions/actions";
import {
  allSelectedFiltersSelector,
  isAppliedFiltersEmpty,
} from "../../store/Selectors/selectors";
const AppliedFilters = () => {
  const dispatch = useDispatch();

  const allSelectedFilters = useSelector(allSelectedFiltersSelector);
  const isSelectedFiltersEmpty = useSelector(isAppliedFiltersEmpty);

  const handleUnSelectFilter = (filter, key) => {
    dispatch(
      unSelectFilter({
        filterName: key,
        filterId: filter.id,
      })
    );
  };

  const clearAllFilters = () => {
    dispatch(unSelectAllFilters());
  };

  return (
    <AppliedFiltersWrapper>
      <ElementsTitleWrapper>Applied Filters: </ElementsTitleWrapper>
      <SelectedFiltersWrapper>
        {!isSelectedFiltersEmpty ? (
          <Fragment>
            {Object.entries(allSelectedFilters).map(([key, value]) => {
              return value.map((filter) => {
                return (
                  <SelectedFilterWrapper key={filter.id}>
                    <span>{filter.title}</span>
                    <span
                      onClick={() => handleUnSelectFilter(filter, key)}
                      className="close-icon"
                    >
                      &#x2716;
                    </span>
                  </SelectedFilterWrapper>
                );
              });
            })}
            <SelectedFilterWrapper
              className="clear-all-btn"
              key="__clear__all"
              onClick={clearAllFilters}
            >
              <span>Clear All</span>
            </SelectedFilterWrapper>
          </Fragment>
        ) : (
          <h4>-none-</h4>
        )}
      </SelectedFiltersWrapper>
    </AppliedFiltersWrapper>
  );
};

export default AppliedFilters;

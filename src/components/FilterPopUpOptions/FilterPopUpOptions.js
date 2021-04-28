import React, { useEffect, useState } from "react";
import {
  PopupContentWrapper,
  PopupOptionsWrapper,
  PopupActionBtnsWrapper,
} from "../../styles/General";
import FilterOption from "../FilterOption/FilterOption";
import { selectFilter, unSelectAllForFilter } from "../../store/Actions/actions";
import { useDispatch } from "react-redux";

const FilterPopUpOptions = ({
  allSelectedFilters,
  isFiltersEmpty,
  filterName,
  filterOptions,
  popupPosition,
  toggle
}) => {
  const dispatch = useDispatch();
  const [currentFilterSelections, setCurrentFilterSelections] = useState([]);

  useEffect(() => {
    if (!isFiltersEmpty && allSelectedFilters[filterName]) {
      const _currentSelections = [...allSelectedFilters[filterName]];
      setCurrentFilterSelections(_currentSelections);
    } else {
      setCurrentFilterSelections([]);
    }

    // eslint-disable-next-line
  }, [allSelectedFilters,toggle]);

  const preventClick = (e) => {
    e.stopPropagation();
    return;
  };
  const toggleFilterSelection = (isFilterSelected, filterOption) => {
    let _currentData = [...currentFilterSelections];
    if (isFilterSelected) {
      _currentData = _currentData.filter((el) => el.id !== filterOption.id);
    } else {
      _currentData.push(filterOption);
    }
    setCurrentFilterSelections([..._currentData]);
  };
  const handleUnselectAll = () => {
    dispatch(
      unSelectAllForFilter({
        filterName: filterName,
      })
    );
  };
  const handleApplySelections = () => {
    dispatch(
      selectFilter({
        filterName: filterName,
        filterSelections: [...currentFilterSelections],
      })
    );
  };
  return (
    <PopupContentWrapper popupPosition={popupPosition} onClick={preventClick}>
      <PopupOptionsWrapper>
        {filterOptions.map((filterEl) => (
          <FilterOption
            key={filterEl.id}
            filterOption={filterEl}
            currentFilterSelections={currentFilterSelections}
            toggleFilterSelection={toggleFilterSelection}
          />
        ))}
      </PopupOptionsWrapper>
      <PopupActionBtnsWrapper>
        {currentFilterSelections.length > 0 && (
          <button onClick={() => handleUnselectAll()}>Cancel</button>
        )}
        <button className="apply-btn" onClick={() => handleApplySelections()}>
          Apply
        </button>
      </PopupActionBtnsWrapper>
    </PopupContentWrapper>
  );
};

export default FilterPopUpOptions;

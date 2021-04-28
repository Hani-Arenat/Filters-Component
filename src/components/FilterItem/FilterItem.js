import React, { useEffect, useState, useRef } from "react";
import useOnClickOutside from "../../utils/useOnClickOutside";
import { useSelector } from "react-redux";

import { ListElementWrapper } from "../../styles/General";
import FilterPopUpOptions from "../FilterPopUpOptions/FilterPopUpOptions";
import MoreFiltersDropDown from "../MoreFiltersDropDown/MoreFiltersDropDown";
import {
  allSelectedFiltersSelector,
  isAppliedFiltersEmpty,
} from "../../store/Selectors/selectors";

const FilterItem = ({ filterName, filterOptions, moreFilters }) => {
  const [selectedFiltersCount, setSelectedFiltersCount] = useState(0);

  const allSelectedFilters = useSelector(allSelectedFiltersSelector);
  const isFiltersEmpty = useSelector(isAppliedFiltersEmpty);

  const [toggle, setToggle] = useState(false);
  const refItem = useRef();

  useOnClickOutside(refItem, () => {
    setToggle(false);
  });

  useEffect(() => {
    if (!moreFilters) {
      if (!isFiltersEmpty && allSelectedFilters[filterName]) {
        setSelectedFiltersCount(allSelectedFilters[filterName].length);
      } else {
        setSelectedFiltersCount(0);
      }
    } else {
      if (!isFiltersEmpty) {
        let _count = 0;
        const keys = Object.keys(moreFilters);

        keys.forEach((el) => {
          if (allSelectedFilters[el]) {
            _count += allSelectedFilters[el].length;
          }
        });
        setSelectedFiltersCount(_count);
      } else {
        setSelectedFiltersCount(0);
      }
    }

    // eslint-disable-next-line
  }, [allSelectedFilters]);

  return (
    <ListElementWrapper
      ref={refItem}
      className={`${selectedFiltersCount && !toggle ? "highlight" : ""} ${
        toggle ? "highlight list-item" : ""
      }`}
      onClick={() => setToggle(!toggle)}
    >
      {`${filterName} ${
        selectedFiltersCount > 0 ? "(" + selectedFiltersCount + ")" : ""
      }`}
      {toggle &&
        (moreFilters ? (
          <MoreFiltersDropDown
            moreFilters={moreFilters}
            allSelectedFilters={allSelectedFilters}
            isFiltersEmpty={isFiltersEmpty}
          ></MoreFiltersDropDown>
        ) : (
          <FilterPopUpOptions
            allSelectedFilters={allSelectedFilters}
            filterName={filterName}
            filterOptions={filterOptions || []}
            isFiltersEmpty={isFiltersEmpty}
          ></FilterPopUpOptions>
        ))}
    </ListElementWrapper>
  );
};

export default FilterItem;

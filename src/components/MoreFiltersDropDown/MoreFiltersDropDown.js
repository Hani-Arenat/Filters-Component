import React from "react";
import DropDownItem from "../DropDownItem/DropDownItem";
import { PopupContentWrapper } from "../../styles/General";

const MoreFiltersDropDown = ({
  moreFilters,
  allSelectedFilters,
  isFiltersEmpty
}) => {
  const preventClick = (e) => {
    e.stopPropagation();
    return;
  };
  return (
    <PopupContentWrapper popupPadding='0px' onClick={preventClick}>
      {Object.entries(moreFilters).map(([key, value, index]) => {
        return (
          <DropDownItem
            key={index + key}
            filterName={key}
            filterOptions={value}
            allSelectedFilters={allSelectedFilters}
            isFiltersEmpty={isFiltersEmpty}
          />
        );
      })}
    </PopupContentWrapper>
  );
};

export default MoreFiltersDropDown;

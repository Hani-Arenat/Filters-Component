import React from "react";
import { MoreFiltersWrapper } from "../../styles/General";
import FilterItem from "../FilterItem/FilterItem";

const MoreFilters = ({ moreFilters }) => {
  return (
    <MoreFiltersWrapper>
      <FilterItem
        filterName="More Filters"
        moreFilters={moreFilters}
      />
    </MoreFiltersWrapper>
  );
};

export default MoreFilters;

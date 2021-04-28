import React, { Fragment } from "react";
import { NavItemsWrapper } from "../../styles/General";
import FilterItem from "../FilterItem/FilterItem";
import MoreFilters from "../MoreFilters/MoreFilters";

const NavFilters = ({ filters }) => {
  const getRestOfFilters = (filters) => {
    let restFilters = {};
    const keys = Object.keys(filters);
    keys.forEach((el, index) => {
      if (index > 1) {
        restFilters[el] = filters[el];
      }
    });
    return restFilters;
  };
  return (
    <Fragment>
      <NavItemsWrapper>
        {Object.entries(filters).map(([key, value, index]) => {
          return (
            <FilterItem
              key={index + key}
              filterName={key}
              filterOptions={value}
            />
          );
        })}
        {Object.keys(filters).length > 2 && (
          <MoreFilters moreFilters={getRestOfFilters(filters)} />
        )}
      </NavItemsWrapper>
    </Fragment>
  );
};

export default NavFilters;

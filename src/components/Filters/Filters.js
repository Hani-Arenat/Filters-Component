import React from "react";
import NavFilters from "../NavFilters/NavFilters";
import AppliedFilters from "../AppliedFilters/AppliedFilters";
import { BodyWrapper } from "../../styles/General";

const Filters = ({ filters }) => {
  const isFiltersNotEmpty = () => {
    return (
      filters && typeof filters === "object" && Object.keys(filters).length > 0
    );
  };

  return (
    <BodyWrapper>
      {isFiltersNotEmpty() && <NavFilters filters={filters} />}
      <AppliedFilters />
    </BodyWrapper>
  );
};

export default Filters;

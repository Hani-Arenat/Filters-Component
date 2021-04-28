import React, { useEffect, useState, useRef } from "react";
import { CollapsibleElementWrapper, CollapsibleElementBtnWrapper } from "../../styles/General";
import FilterPopUpOptions from "../FilterPopUpOptions/FilterPopUpOptions";
import useOnClickOutside from "../../utils/useOnClickOutside";

const DropDownItem = ({
  filterName,
  filterOptions,
  allSelectedFilters,
  isFiltersEmpty,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [selectedFiltersCount, setSelectedFiltersCount] = useState(0);

  const listItemToggle = useRef();
  useOnClickOutside(listItemToggle, () => {
    setShowContent(false);
  });

  useEffect(() => {
    if (!isFiltersEmpty && allSelectedFilters[filterName]) {
      setSelectedFiltersCount(allSelectedFilters[filterName].length);
    } else {
      setSelectedFiltersCount(0);
    }
    // eslint-disable-next-line
  }, [allSelectedFilters]);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <CollapsibleElementWrapper ref={listItemToggle}>
      <CollapsibleElementBtnWrapper
        className={showContent ? "active" : ""}
        onClick={() => handleShowContent()}
      >
        {`${filterName} `}
        {selectedFiltersCount > 0 ? "(" + selectedFiltersCount + ")" : null}
      </CollapsibleElementBtnWrapper>
      <div
        className={showContent ? "content display-block padding-0" : "content"}
      >
        <FilterPopUpOptions
          filterName={filterName}
          filterOptions={filterOptions}
          popupPosition="relative"
          allSelectedFilters={allSelectedFilters}
          isFiltersEmpty={isFiltersEmpty}
          toggle={showContent}
        ></FilterPopUpOptions>
      </div>
    </CollapsibleElementWrapper>
  );
};

export default DropDownItem;

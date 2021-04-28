import React, { useEffect, useState } from "react";

const FilterOption = ({
  filterOption,
  currentFilterSelections,
  toggleFilterSelection,
}) => {
  const [isFilterSelected, setIsFilterSelected] = useState(false);

  useEffect(() => {
    const currentFilterIndex = currentFilterSelections.findIndex(
      (el) => el.id === filterOption.id
    );
    if (currentFilterIndex !== -1) {
      setIsFilterSelected(true);
    } else {
      setIsFilterSelected(false);
    }
    // eslint-disable-next-line
  }, [currentFilterSelections]);

  const handleOnClick = () => {
    toggleFilterSelection(isFilterSelected, filterOption);
    setIsFilterSelected(!isFilterSelected);
  };
  return (
    <>
      <span
        className={isFilterSelected ? "highlight" : ""}
        onClick={() => handleOnClick()}
      >
        {filterOption.title}
      </span>
    </>
  );
};

export default FilterOption;

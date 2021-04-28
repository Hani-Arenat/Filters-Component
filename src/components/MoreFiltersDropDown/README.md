# Component Description

- Dropdown list of the hidden filters in mobile case, every list item represent filter with it's options.

# Component Usage

This Component need 3 props to work as expected
1. **moreFilters** (type *Object*) => rest of filters (disappeared filters) in mobile case.
2. **allSelectedFilters** (type *Object*) => All selected/applied filters.
3. **isFiltersEmpty** (type *Boolean*) => true if allSelectedFilters length is equal to 0, otherwise false.
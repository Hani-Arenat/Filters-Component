# Component Description

- In mobile UI not all filters show up, the rest of filters (disappeared filters) can be accessed through "More Filters" button, which always appears only in mobile case. when we click it, will show list of items (filters), this Component represent every item (filter) inside that list.

# Component Usage

This Component need 4 props to work as expected
1. **filterName** (type *String*) =>name of the list item (which represent the type of filters options) in the dropdown list of "More Filters" button.
2. **filterOptions** (type *Array*) => the filter options to select from, every item is Object have 2 keys (id, title). 
3. **allSelectedFilters** (type *Object*) => All selected/applied filters.
4. **isFiltersEmpty** (type *Boolean*) => true if allSelectedFilters length is equal to 0, otherwise false.
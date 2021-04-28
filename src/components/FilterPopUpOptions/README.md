# Component Description

- Container of the filter option items.
- With 2 action Buttons
- "Apply" button to apply the user selections
- "Cancel" button to clear/remove all the user selections for the filter.

# Component Usage

This Component need 6 props to work as expected
1. **allSelectedFilters** (type *Object*) => All selected/applied filters.
2. **isFiltersEmpty** (type *Boolean*) => true if allSelectedFilters length is equal to 0, otherwise false.
3. **filterName** (type *String*) =>name of the filter item / filter type.
4. **filterOptions** (type *Array*) => the filter options to select from, every item is Object have 2 keys (id, title).
5. **popupPosition** (type *string*) => css value of position property to determine how to disply the popup (important to control mobile case)
6. **toggle** (type *Boolean*) => reactive var value to control show/hide filter options in mobile case.

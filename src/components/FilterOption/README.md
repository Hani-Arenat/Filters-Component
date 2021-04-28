# Component Description

- represent the filter option where the user can select it as wanted filter
- This component appears in the AppliedFilters with "X" icon allow removeing it.
- if selected will be highlighted (red border)

# Component Usage

This Component need 3 props to work as expected
1. **filterOption** (type *Object*) => have 2 keys (id, title).
2. **currentFilterSelections** (type *Array*) => to determine if this filter optios is selected or not.
3. **toggleFilterSelection** (type *Callback*) => function to toggle filter option selection and add/remove it from currentFilterSelections.

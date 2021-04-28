# Component Description

- represent the filter item type which show popup of the filters options to select from.
- i.e: every filter is a type that contain filters options reflect the wanted type.

# Component Usage

This Component receive 3 props, and it need at least 2 props to work as expected
1. **filterName** (type *String*) =>name of the filter item / filter type.
2. **filterOptions** (type *Array*) => the filter options to select from, every item is Object have 2 keys (id, title). 
3. **moreFilters** (type *Object* - Optional) => rest of filters (disappeared filters) in mobile case.

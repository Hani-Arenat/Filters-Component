# Component Description

- Container of the filters, here we manage mobile case where we show only the first 2 filters and hide the rest.
- Also here we show the MoreFilters component (container of the hidden filters)
- all of this done by css media queries, and using this we render the items once and show/hide it based on the media queries
readings, which will be good for performance.

# Component Usage

This Component need 1 props to work as expected
1. **filters** (type *Object*) => the filters types with their collection (filter options) to show, where the user can select his filters.
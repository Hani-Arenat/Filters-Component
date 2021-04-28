import {
    createSelector
} from 'reselect';

/*
  Input
*/
const allSelectedFilters = state => state.appliedFilters;

/*
  Selectors
*/

// Return all selected/applied Filters
export const allSelectedFiltersSelector = createSelector(allSelectedFilters, allSelectedFilters => allSelectedFilters);

// Return true if Applied Filters empty, otherwise false
export const isAppliedFiltersEmpty = createSelector(allSelectedFilters, allSelectedFilters => {
    const _values = Object.values(allSelectedFilters)
    
    if(!_values.length) return true;
    
    for (let i in _values) {
        if (_values[i].length) {
            return false
        }
    }
    return true;
});
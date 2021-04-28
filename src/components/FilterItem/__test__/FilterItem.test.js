import React from "react";

import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilterItem from "../FilterItem";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

configure({
  adapter: new Adapter(),
});

describe("FilterItem Component", () => {
  const initialState = {appliedFilters : {}};
  const mockStore = configureStore();
  let store, wrapper;
  store = mockStore(initialState);
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <FilterItem filterOptions={null} />
      </Provider>
    );
    
  });
  it("renders without crashing, even if filter options null or empty. And list item (li) rendered normally", () => {
    expect(wrapper.find('li').length).toBe(1);

  });
});

import React from "react";

import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Filters from "../Filters";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

configure({
  adapter: new Adapter(),
});

describe("Filters Component", () => {
  const initialState = {appliedFilters : {}};
  const mockStore = configureStore();
  let store, wrapper;
  store = mockStore(initialState);
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Filters filters={null} />
      </Provider>
    );
    
  });
  it("should render normally even if filters prop equal null", () => {
    expect(wrapper).toBeTruthy()
  });
});

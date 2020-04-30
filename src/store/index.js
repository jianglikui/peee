import { createStore } from "redux";

const store = createStore(function (state = { times: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { times: state.times + 1 };
    case "DECREMENT":
      return { times: state.times - 1 };
    default:
      return state;
  }
});

export { store };

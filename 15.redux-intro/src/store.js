import { applyMiddleware, combineReducers, createStore } from "redux";
import accauntReducer from "./features/accaunt/accauntSlice";
import customerReducer from "./features/customers/customerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  account: accauntReducer,
  customer: customerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

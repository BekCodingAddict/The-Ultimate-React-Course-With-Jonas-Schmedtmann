import { applyMiddleware, combineReducers, createStore } from "redux";
import accauntReducer from "./features/accaunt/accauntSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  account: accauntReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

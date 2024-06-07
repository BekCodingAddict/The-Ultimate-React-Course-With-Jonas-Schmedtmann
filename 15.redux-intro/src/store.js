import { combineReducers, createStore } from "redux";
import accauntReducer from "./features/accaunt/accauntSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accauntReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;

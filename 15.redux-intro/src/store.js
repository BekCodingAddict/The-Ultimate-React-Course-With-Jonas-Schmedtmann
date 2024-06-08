import { configureStore } from "@reduxjs/toolkit";
import accauntReducer from "./features/accaunt/accauntSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    accaunt: accauntReducer,
    customer: customerReducer,
  },
});

export default store;

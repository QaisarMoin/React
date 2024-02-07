import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../featrues/todo/todoSlice";

export const store = configureStore({
  reducer: todoSlice,
});

import { configureStore } from "@reduxjs/toolkit";
import experiencesReducer from "../features/experiencesSlice";

const store = configureStore({
  reducer: {
    experiences: experiencesReducer,
  },
});

export default store;

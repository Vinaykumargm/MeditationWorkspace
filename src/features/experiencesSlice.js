import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   experiences: JSON.parse(localStorage.getItem("experiences")) || [],
// };
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('experiences');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load experiences from local storage", e);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('experiences', serializedState);
  } catch (e) {
    console.warn("Could not save experiences to local storage", e);
  }
};

const experiencesSlice = createSlice({
  name: "experiences",
  initialState: loadFromLocalStorage(),
  reducers: {
    addExperience: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
  },
});

export const { addExperience } = experiencesSlice.actions;
export default experiencesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  school: "oxford",
  degree: "bachelor of computer science",
  year: "5155",
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setSchool: (state, action) => {
      state.school = action.payload;
    },
    setDegree: (state, action) => {
      state.degree = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

const { reducer, actions } = educationSlice;
export const { setSchool, setDegree, setYear } = actions;
export const educationReducer = reducer;

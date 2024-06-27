import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "",
  position: "",
  responsibilities: "",
  startDate: "",
  endDate: "",
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setResponsibilities: (state, action) => {
      state.responsibilities = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

const { reducer, actions } = experienceSlice;
export const { setCompany, setPosition, setResponsibilities , setStartDate, setEndDate} = actions;
export const experienceReducer = reducer;

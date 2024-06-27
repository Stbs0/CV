import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "John Doe",
  email: "example@ex.com",
  phone: "111-111-1111",
  address: "hamilton, ontario",
};

const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.phone = action.payload;
    },
  },
});

const { reducer, actions } = personalSlice;
export const { setName, setAddress, setEmail, setPhone } = actions;
export const personalReducer = reducer;

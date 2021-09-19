import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    updateddata: {},
  },
  reducers: {
    setData: (state, action) => {
      state.updateddata = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export const selectData = (state) => state.data.updateddata;

export default dataSlice.reducer;
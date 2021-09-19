import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    updateddata: {},
    category:null
  },
  reducers: {
    setData: (state, action) => {
      state.updateddata = action.payload;
    },

    setCategory: (state, action) => {
        state.category = action.payload;
      },

  },
});

export const { setData , setCategory } = dataSlice.actions;

export const selectData = (state) => state.data.updateddata;
export const selectCategory = (state) => state.data.category;

export default dataSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    error: "",
    loading: false,
    message: "",
  },
  reducers: {
    fetchStart: (state) => ({
      ...state,
      error: "",
      message: "",
      loading: true,
    }),
    fetchSuccess: (state) => ({
      ...state,
      error: "",
      message: "",
      loading: false,
    }),
    fetchError: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      message: "",
    }),
    showMessage: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      message: "",
    }),
    hideMessage: (state) => ({
      ...state,
      loading: false,
      error: "",
      message: "",
    }),
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  showMessage,
  hideMessage,
} = commonSlice.actions;
export default commonSlice.reducer;

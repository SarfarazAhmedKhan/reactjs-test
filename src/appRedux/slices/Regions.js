import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
    name: "region",
    initialState: {
        states: [],
        cities: [],
        where: {}
    },
    reducers: {
        updateRegions: (state, action) => ({
            ...state,
            ...action?.payload
        })
    }
});
export const { updateRegions } = regionSlice.actions;
export default regionSlice.reducer;

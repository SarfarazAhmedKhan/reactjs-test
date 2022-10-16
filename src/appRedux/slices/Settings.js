import { createSlice, createAction } from "@reduxjs/toolkit";
import AppLocale from "../../languageProvider/index";
import {
  NAV_STYLE_FIXED,
  THEME_COLOR_SELECTION_PRESET,
  THEME_TYPE_LITE,
} from "../../constants/ThemeSetting";
const locationChange = createAction("@@router/LOCATION_CHANGE");

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    navStyle: NAV_STYLE_FIXED,
    // layoutType: LAYOUT_TYPE_FULL,
    // themeType: THEME_TYPE_DARK,
    themeType: THEME_TYPE_LITE,
    colorSelection: THEME_COLOR_SELECTION_PRESET,
    navCollapsed: true,
    pathname: "",
    width: window.innerWidth,
    isDirectionRTL: false,
    locale: AppLocale[0].id,
  },
  reducers: {
    toggleCollapsedSideNav: (state, action) => ({
      ...state,
      navCollapsed: action.payload,
    }),
    updateWindowWidth: (state, action) => ({
      ...state,
      width: action.payload,
    }),
    setThemeType: (state, action) => ({
      ...state,
      themeType: action.payload,
    }),
    setThemeColor: (state, action) => ({
      ...state,
      colorSelection: action.colorSelection,
    }),
    onNavStyleChange: (state, action) => ({
      ...state,
      navStyle: action.payload,
    }),
    onLayoutTypeChange: (state, action) => ({
      ...state,
      layoutType: action.payload,
    }),
    switchLanguage: (state, action) => ({
      ...state,
      locale: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(locationChange, (state, action) => ({
        ...state,
        pathname: action.payload.location.pathname,
        navCollapsed: false,
      }))
      .addDefaultCase(() => { });
  },
});

export const {
  toggleCollapsedSideNav,
  updateWindowWidth,
  setThemeType,
  setThemeColor,
  onNavStyleChange,
  onLayoutTypeChange,
  switchLanguage,
} = settingsSlice.actions;
export default settingsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialPasswordCriteriaState = {
  includeUpperCaseLetter: true,
  includeLowerCaseLetter: true,
  includeSpecialCharacter: true,
  excludeAmbiguousCharacter: false,
  passwordLength: 8,
};

const passwordCriteriaSlice = createSlice({
  name: "criteria",
  initialState: initialPasswordCriteriaState,
  reducers: {
    setUpperCase(state) {
      state.includeUpperCaseLetter = !state.includeUpperCaseLetter;
    },
    setLowerCase(state) {
      state.includeLowerCaseLetter = !state.includeLowerCaseLetter;
    },
    setSpecialCharacter(state) {
      state.includeSpecialCharacter = !state.includeSpecialCharacter;
    },
    setAmbiguousCharacter(state) {
      state.excludeAmbiguousCharacter = !state.excludeAmbiguousCharacter;
    },
    setPasswordLength(state, action) {
      state.passwordLength = action.payload;
    },
  },
});

export const passwordCriteraActions = passwordCriteriaSlice.actions;

export default passwordCriteriaSlice.reducer;

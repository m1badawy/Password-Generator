import { createSlice } from "@reduxjs/toolkit";

const initialPasswordCriteriaState = {
  includeSpecialCharacter: true,
  includeNumber: true,
  includeLowerCaseLetter: true,
  includeUpperCaseLetter: true,
  excludeAmbiguousCharacter: false,
  passwordLength: 8,
  generatedPassword:null,
  passwordGuide:null,
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
    setIncludeNumber(state) {
        state.includeNumber = !state.includeNumber;
      },
    setAmbiguousCharacter(state) {
      state.excludeAmbiguousCharacter = !state.excludeAmbiguousCharacter;
    },
    setPasswordLength(state, action) {
      state.passwordLength = action.payload;
    },
    setGeneratedPasswordGuidance(state, action) {
      state.passwordGuide = action.payload;
    },
    setGeneratedPassword(state, action) {
      state.generatedPassword = action.payload;
    },
  },
});

export const passwordCriteraActions = passwordCriteriaSlice.actions;

export default passwordCriteriaSlice.reducer;

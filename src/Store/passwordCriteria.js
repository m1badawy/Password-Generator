import { createSlice } from "@reduxjs/toolkit";

const initialPasswordCriteriaState = {
  includeUpperCaseLetter: false,
  includeLowerCaseLetter: false,
  includeSpecialCharacter: false,
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
    setPasswordLength(state, action) {
      state.passwordLength = action.payload
    },
  },
});

export const passwordCriteraActions = passwordCriteriaSlice.actions;

export default passwordCriteriaSlice.reducer;

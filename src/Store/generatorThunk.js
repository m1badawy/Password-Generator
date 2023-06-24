import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatePassword } from "../Components/GeneratorFunction";
import { passwordCriteraActions } from "../Store/passwordCriteria";

export const generatePasswordThunk = createAsyncThunk(
  "password/generate",
  async (_, { getState, dispatch }) => {
    const state = getState().PWCriteria;
    const {
      includeUpperCaseLetter,
      includeLowerCaseLetter,
      includeNumber,
      includeSpecialCharacter,
      excludeAmbiguousCharacter,
      passwordLength,
    } = state;

    const result = generatePassword(
      passwordLength,
      includeUpperCaseLetter,
      includeLowerCaseLetter,
      includeNumber,
      includeSpecialCharacter,
      excludeAmbiguousCharacter
    );

    dispatch(passwordCriteraActions.setGeneratedPassword(result.password));
    dispatch(passwordCriteraActions.setGeneratedPasswordGuidance(result.passwordGuidance));
  }
);

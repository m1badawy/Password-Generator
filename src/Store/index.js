import { configureStore } from "@reduxjs/toolkit";
import passwordCriteriaReducer from "./passwordCriteria";

const store = configureStore({
    reducer: {
        PWCriteria: passwordCriteriaReducer,
    }
})

export default store
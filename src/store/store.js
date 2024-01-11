import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../store/cardSlice"

export const store = configureStore({
    reducer: {
        card: cardReducer
    }
})
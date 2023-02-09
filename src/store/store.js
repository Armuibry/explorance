import { configureStore } from "@reduxjs/toolkit";
import { npmSlice } from "./npmslice";


const store = configureStore({
    reducer: {
        npm: npmSlice.reducer
    }
})

export default store
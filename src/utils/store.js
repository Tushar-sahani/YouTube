import appSlice from "./appSlice";
import searchSlice from "./searchSlice"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        app : appSlice,
        search: searchSlice,
    }
})

export default store;
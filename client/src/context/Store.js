import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./MessageSlice";

const Store = configureStore({
    reducer: {
        message: messageSlice
    }
})

export default Store;
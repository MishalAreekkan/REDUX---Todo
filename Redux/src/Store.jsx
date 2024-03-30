import { configureStore } from "@reduxjs/toolkit";
import ABC from "./Todoslice";

export default configureStore({
    reducer: {
        todo: ABC,
    }
})
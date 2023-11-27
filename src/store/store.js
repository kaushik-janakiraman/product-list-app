import { configureStore } from "@reduxjs/toolkit";
import userSliceData from '../features/userSlice'

const store = configureStore({
    reducer: {
        user: userSliceData
    }
})

export default store
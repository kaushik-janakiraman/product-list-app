import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    name:'',
    designation: '',
    country: '',
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user data',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.username = action?.payload[0]?.username
            state.name = action?.payload[0]?.name
            state.designation = action?.payload[0]?.designation
            state.country = action?.payload[0]?.country
            state.isLoggedIn = action?.payload[0]?.isLoggedIn
        }
    }
})

export default userSlice.reducer
export const {updateUser} = userSlice.actions
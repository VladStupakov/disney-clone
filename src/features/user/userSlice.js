import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  picture: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    setUserDetails: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.picture = action.payload.picture
    },
    setSignOutState : (state) => {
      state.name = null
      state.email = null
      state.picture = null
    }
  }
})

export const {setUserDetails, setSignOutState} = userSlice.actions

export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPicture = state => state.user.picture

export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    location: ''
  },
  reducers: {
    locationFun: (state,action) => {
        // console.log('====================================');
        // console.log(action);
        // console.log('====================================');
        state.location=action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { locationFun } = locationSlice.actions

export default locationSlice.reducer
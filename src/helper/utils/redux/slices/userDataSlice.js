import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
  name: 'user_data',
  initialState: {
    user_data: []
  },
  reducers: {
    userDataFun: (state,action) => {
        // console.log('====================================filteringAction');
        // console.log('filteringActionFun',action);
        // console.log('====================================filteringAction');
        state.user_data=action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { userDataFun } = userDataSlice.actions

export default userDataSlice.reducer
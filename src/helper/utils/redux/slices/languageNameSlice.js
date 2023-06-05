import { createSlice } from '@reduxjs/toolkit'

export const languageNameSlice = createSlice({
  name: 'language_name',
  initialState: {
    language_name: {}
  },
  reducers: {
    languageNameFun: (state,action) => {
        console.log('==================================== reducer',action);
        // console.log(action);
        // console.log('====================================');
        state.language_name=action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { languageNameFun } = languageNameSlice.actions

export default languageNameSlice.reducer
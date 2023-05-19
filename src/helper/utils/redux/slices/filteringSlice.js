import { createSlice } from '@reduxjs/toolkit'

export const filteringSlice = createSlice({
  name: 'filtering',
  initialState: {
    filtering: []
  },
  reducers: {
    FilterFun: (state,action) => {
        // console.log('====================================filteringAction');
        // console.log('filteringActionFun',action);
        // console.log('====================================filteringAction');
        state.filtering=action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { FilterFun } = filteringSlice.actions

export default filteringSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import locationSlice from './slices/locationSlice'
import filteringSlice from './slices/filteringSlice'
import userDataSlice from './slices/userDataSlice'
export default configureStore({
  reducer: {
    locationReducer:locationSlice,
    filterReducer:filteringSlice,
    userDataReducer:userDataSlice,
  }
})
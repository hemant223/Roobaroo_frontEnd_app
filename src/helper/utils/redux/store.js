import { configureStore } from '@reduxjs/toolkit'
import locationSlice from './slices/locationSlice'

export default configureStore({
  reducer: {
    locationReducer:locationSlice
  }
})
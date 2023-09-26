import { configureStore } from '@reduxjs/toolkit'
import api from '../api'

import cartReducer from './reducers/cart'
import sidebarReducer from './reducers/sidebar'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sidebar: sidebarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store
export type RootReducer = ReturnType<typeof store.getState>

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type sidebarState = {
  sidebarEnable: boolean
  component: string
}

const initialState: sidebarState = {
  sidebarEnable: false,
  component: 'cart'
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    changeComponent: (state, action: PayloadAction<string>) => {
      state.component = action.payload
    },
    openSidebar: (state) => {
      state.sidebarEnable = true
    },
    closeSidebar: (state) => {
      state.sidebarEnable = false
    }
  }
})

export default sidebarSlice.reducer
export const { openSidebar, closeSidebar, changeComponent } =
  sidebarSlice.actions

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CartState = {
  items: ModalState[]
  enable: boolean
}

const initialState: CartState = {
  items: [],
  enable: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ModalState>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!existingItem) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.enable = true
    },
    close: (state) => {
      state.enable = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer

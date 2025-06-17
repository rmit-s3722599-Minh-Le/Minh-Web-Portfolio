// reference: https://www.youtube.com/watch?v=zHYkA1AycPs

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}


const clickedSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    increment(state) {
      state.push({
        value: value+=1
      })
    },
  }
})

export const { increment } = clickedSlice.actions
export default clickedSlice.reducer
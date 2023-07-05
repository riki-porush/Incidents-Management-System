import { createSlice } from "@reduxjs/toolkit";


 export interface CounterState {
  counter: number
}
const initValue:CounterState = {
  counter:99
}

const counterSlice = createSlice({
  name:"counter",
  initialState: initValue,
  reducers: {

  }
})

export default counterSlice.reducer
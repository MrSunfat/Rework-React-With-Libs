import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, taskSlice } from "./slices";


const storeConfig = configureStore({
    reducer: {
      counter: counterSlice.reducer,
      task: taskSlice.reducer
    },
  })

export { counterSlice, taskSlice, storeConfig }
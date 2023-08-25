import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [] as string[]
  },
  reducers: {
    addTask: (state, action) => {
        state.tasks.push(action.payload);
    },
    removeTask: (state) => {
        state.tasks.pop()
    },
  },
});
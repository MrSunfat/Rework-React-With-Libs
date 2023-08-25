import {counterSlice, storeConfig, taskSlice} from './storeConfig'

// Actions
const { increment, decrement } = counterSlice.actions;
const { addTask, removeTask } = taskSlice.actions;

// Actions
export {increment, decrement, addTask, removeTask}

// Type
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeConfig.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeConfig.dispatch

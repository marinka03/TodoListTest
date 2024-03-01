import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    AllTasks(state, action) {
      console.log(action)
      state.items = action.payload;
    },
    AddTask(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    deleteTask(state, action) {
      const index = state.items.findIndex(task => task.id === action.payload);
      console.log(action);
      state.items = state.items.filter((item, idx) => {
        return item[idx] !== index ? item : null;
      });
    },
  },
});
export const { AllTasks, AddTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

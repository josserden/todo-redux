import { createSlice } from "@reduxjs/toolkit";

const initState = { todos: [] };

const todoSlice = createSlice({
  name: "todos",
  initialState: initState,
  reducers: {
    addTodo(state, action) {
      console.log("state:", state);
      console.log("action:", action);

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    handleTodoComplete(state, action) {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggleTodo.completed = !toggleTodo.complete;
    },
  },
});

export const { addTodo, removeTodo, handleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;

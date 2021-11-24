import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, handleTodoComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          handleTodoComplete={handleTodoComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;

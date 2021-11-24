import { useState } from 'react';
import TodoList from './TodoList';
import InputField from './InputField';
import { Section, Container, Heading } from '../App.styled';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return { ...todo, completed: !todo.completed };
      })
    );
  };

  return (
    <Section>
      <Container>
        <Heading>Todo Redux Toolkit</Heading>

        <InputField text={text} handleInput={setText} handleClick={addTodo} />

        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          handleTodoComplete={handleTodoComplete}
        />
      </Container>
    </Section>
  );
}

export default App;

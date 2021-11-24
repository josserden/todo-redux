import { Checkbox, TodoText, RemoveBtn } from '../App.styled';

const TodoItems = ({ id, text, completed, removeTodo, handleTodoComplete }) => {
  return (
    <li key={id}>
      <Checkbox
        type="checkbox"
        checked={completed}
        onChange={() => handleTodoComplete(id)}
      />
      <TodoText>{text}</TodoText>
      <RemoveBtn onClick={() => removeTodo(id)}>&times;</RemoveBtn>
    </li>
  );
};

export default TodoItems;

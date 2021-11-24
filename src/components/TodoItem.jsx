import { Checkbox, TodoText, RemoveBtn } from '../App.styled';
import { useDispatch } from 'react-redux';
import { removeTodo, handleTodoComplete } from '../redux/todo/slice';

const TodoItems = ({ id, text, completed}) => {
  const dispatch = useDispatch()

  const removeTask = () => {
    dispatch(removeTodo({id}))
  }

  const completeTask = () => {
dispatch(handleTodoComplete({id}))
  }


  return (
    <li key={id}>
      <Checkbox
        type="checkbox"
        checked={completed}
        onChange={completeTask}
      />
      <TodoText>{text}</TodoText>
      <RemoveBtn onClick={removeTask}>&times;</RemoveBtn>
    </li>
  );
};

export default TodoItems;

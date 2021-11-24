import { Wrapper, Label, Input, Button } from '../App.styled';

const InputField = ({ text, handleInput, handleClick }) => {
  return (
    <Label>
      Create Your Todo
      <Wrapper>
        <Input
          type="text"
          value={text}
          placeholder="Your message"
          onChange={(event) => handleInput(event.target.value)}
        />
        <Button onClick={handleClick}>Add Todo</Button>
      </Wrapper>
    </Label>
  );
};

export default InputField;

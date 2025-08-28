import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 8px;
`;

const Checkbox = styled.input`
  accent-color: #1976d2;
  width: 18px;
  height: 18px;
`;

const Text = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 16px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#888" : "#222")};
`;

const DeleteButton = styled.button`
  padding: 4px 12px;
  font-size: 14px;
  background: #e53935;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #b71c1c;
  }
`;

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <List>
      {todos.map((todo) => (
        <Item key={todo.id}>
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <Text completed={todo.completed}>{todo.text}</Text>
          <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
        </Item>
      ))}
    </List>
  );
}
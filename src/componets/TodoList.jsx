import styled, { keyframes } from "styled-components";
import { useState } from "react";

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; height: 0; margin-bottom: 0; padding: 0; }
`;

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
  opacity: 1;
  transition: opacity 0.4s;
  animation: ${({ $isRemoving }) => ($isRemoving ? fadeOut : "none")} 0.4s forwards;
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
  color: ${({ completed }) => (completed ? "#bbb" : "#222")};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  opacity: ${({ completed }) => (completed ? 0.6 : 1)};
  transition: color 0.2s, opacity 0.2s;
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
  const [removingIds, setRemovingIds] = useState([]);

  const handleDelete = (id) => {
    setRemovingIds((ids) => [...ids, id]);
    setTimeout(() => {
      onDelete(id);
      setRemovingIds((ids) => ids.filter((remId) => remId !== id));
    }, 400); 
  };

  return (
    <List>
      {todos.map((todo) => (
        <Item key={todo.id} $isRemoving={removingIds.includes(todo.id)}>
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <Text completed={todo.completed}>{todo.text}</Text>
          <DeleteButton onClick={() => handleDelete(todo.id)}>Delete</DeleteButton>
        </Item>
      ))}
    </List>
  );
}
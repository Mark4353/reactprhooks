import { Component } from "react";
import styled from "styled-components";

const EditorWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #1565c0;
  }
`;

export default class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  handleAddTodo = () => {
    if (this.state.textValue.trim() === "") return;
    this.props.onAdd(this.state.textValue);
    this.setState({ textValue: "" });
  };

  render() {
    return (
      <EditorWrapper>
        <Input
          type="text"
          value={this.state.textValue}
          onChange={(e) => this.setState({ textValue: e.target.value })}
          placeholder="Нове завдання"
        />
        <Button onClick={this.handleAddTodo}>Додати</Button>
      </EditorWrapper>
    );
  }
}

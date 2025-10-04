import { Component } from 'react';
import './App.css';
import data from './todo.json';
import TodoList from './componets/TodoList';
import TodoEditor from './componets/TodoEditor';
import Filter from './componets/Filter';
import Info from './componets/Info';
import { useState, useEffect } from 'react';


const TODOS_KEY = 'todos';

export const App = () => {
  // state = {
  //   todos: [],
  //   filter: '',
  // };

const [todos, setTodos] = useState([]);

const [filter, setFilter] = useState("");

  // componentDidMount() {
  //   const saved = localStorage.getItem(TODOS_KEY);
  //   if (saved) {
  //     this.setState({ todos: JSON.parse(saved) });
  //   } else {
  //     this.setState({ todos: data });
  //   }
  // }
useEffect(()=>{
   const saved = localStorage.getItem(TODOS_KEY);
    if (saved) {
      setTodos( JSON.parse(saved) );
    } else {
      setTodos( data );
    }
},
[]

)
  // componentDidUpdate(_, prevState) {
  //   if (prevState.todos !== this.state.todos) {
  //     localStorage.setItem(TODOS_KEY, JSON.stringify(this.state.todos));
  //   }
  // }

useEffect(() =>{
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
},
[todos]
)

  // handleFilterChange = (filter) => {
  //   this.setState({ filter });
  // };

  toggleTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    const filteredTodos = this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    const completedCount = this.state.todos.filter((t) => t.completed).length;

    return (
      <div className="App">
        <h1>Todo List</h1>
        <Info total={this.state.todos.length} completed={completedCount} />
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <TodoEditor onAdd={this.addTodo} />
        <TodoList
          todos={filteredTodos}
          onToggle={this.toggleTodo}
          onDelete={this.deleteTodo}
        />
      </div>
    );
  }
}

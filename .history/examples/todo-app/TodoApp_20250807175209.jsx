/** @jsx jCreateElement */
import $ from 'jquery';
import { jCreateElement } from '../../src/createElement.js';

let todos = [];
let nextId = 1;

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    <input 
      type="checkbox" 
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
    />
    <span className="todo-text">{todo.text}</span>
    <button 
      className="delete-btn"
      onClick={() => onDelete(todo.id)}
    >
      ×
    </button>
  </li>
);

const TodoApp = () => {
  const addTodo = () => {
    const input = $('#todo-input');
    const text = input.val().trim();
    
    if (text) {
      todos.push({
        id: nextId++,
        text,
        completed: false
      });
      
      input.val('');
      renderTodos();
    }
  };

  const toggleTodo = (id) => {
    todos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
  };

  const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
  };

  const renderTodos = () => {
    const todoList = $('#todo-list');
    todoList.empty();
    
    todos.forEach(todo => {
      todoList.append(
        <TodoItem 
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      );
    });
  };

  return (
    <div className="todo-app">
      <h1>JQX Todo App</h1>
      
      <div className="todo-input-section">
        <input 
          id="todo-input"
          type="text" 
          placeholder="Add a new todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul id="todo-list" className="todo-list"></ul>
      
      <div className="todo-stats">
        <span>Total: {todos.length}</span>
        <span>Completed: {todos.filter(t => t.completed).length}</span>
      </div>
    </div>
  );
};

export default TodoApp;

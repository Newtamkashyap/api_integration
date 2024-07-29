import logo from './logo.svg';
import './App.css';
import { TodoList } from './todoList';
import { TodoEdit } from './todoEdit';
import { TodoRemove } from './todoRemove';
import { TodoUpdate } from './todoUpdate';

function App() {
  return (
    <>
    <TodoList/>
    <TodoEdit/>
    <TodoRemove/>
    <TodoUpdate/>
    </>
  );
}

export default App;

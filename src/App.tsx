import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todoList, setTodoList] = React.useState(['first', 'second']);
  const addItem = () => setTodoList(todoList.concat(['another'])); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {
          todoList.map((item) => {
            return (<div>{item}</div>);
          })
        }
        <button onClick={addItem}>Add Item</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

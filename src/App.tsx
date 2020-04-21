import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todoList, setTodoList] = React.useState(['first', 'second']);
  const [value, setValue] = React.useState('');
  const addItem = () => setTodoList(todoList.concat([value || 'another']));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          todoList.map((item) => {
            return (<div>{item}</div>);
          })
        }
      <button onClick={addItem}>Add item</button>
      <input type='text' onChange={(event) => setValue(event.target.value)} value={value} />
      </header>
    </div>
  );
}

export default App;

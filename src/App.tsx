import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface TodoItem {
  isDone: boolean;
  description: string;
}

// Making TodoItem a global var instead of a block scope let means it will
// persist beyond one React render cycle.
var globalTodoList: TodoItem[] = [
  { isDone: false, description: "first" },
  { isDone: true, description: "second" }
];

function TodoListItem({ item }: { item: TodoItem }) {
  const [checked, setChecked] = React.useState(item.isDone);
  const toggleDone = () => {
    item.isDone = !item.isDone;
    setChecked(item.isDone);
  };

  return (
    <div key={item.description + Math.random()}>
      <input type="checkbox" checked={checked} onClick={toggleDone} />
      <span>{item.description}</span>
    </div>
  );
}

function App() {
  const [todoList, setTodoList] = React.useState<TodoItem[]>(globalTodoList);
  const [value, setValue] = React.useState("");

  const clearDone = () => {
    globalTodoList = globalTodoList.filter(item => !item.isDone);
    setTodoList(globalTodoList);
  };

  const addItem = () => {
    globalTodoList = globalTodoList.concat([
      { isDone: false, description: value || "another" }
    ]);
    setValue("");

    setTodoList(globalTodoList);
  };

  console.log("todoList: ", globalTodoList);

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
        {todoList.map(item => (
          <TodoListItem item={item} />
        ))}
        <button onClick={addItem}>Add item</button>
        <input
          type="text"
          onChange={event => setValue(event.target.value)}
          value={value}
        />
        <button onClick={clearDone}>Clear done</button>
      </header>
    </div>
  );
}

export default App;

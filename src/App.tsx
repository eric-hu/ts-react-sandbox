import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface TodoItem {
  isDone: boolean;
  description: string;
}

function TodoListItem({ item }: { item: TodoItem }) {
  const [checked, setChecked] = React.useState(item.isDone);
  const toggleDone = () => setChecked(!checked);
  return (
    <div key={item.description}>
      <input type="checkbox" checked={checked} onClick={toggleDone} />
      <span>{item.description}</span>
    </div>
  );
}

function App() {
  const [todoList, setTodoList] = React.useState<TodoItem[]>([
    { isDone: false, description: "first" },
    { isDone: true, description: "second" }
  ]);
  const [value, setValue] = React.useState("");
  const addItem = () =>
    setTodoList(
      todoList.concat([{ isDone: false, description: value || "another" }])
    );

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
        {todoList.map(item => {
          return <TodoListItem item={item} />;
        })}
        <button onClick={addItem}>Add item</button>
        <input
          type="text"
          onChange={event => setValue(event.target.value)}
          value={value}
        />
      </header>
    </div>
  );
}

export default App;

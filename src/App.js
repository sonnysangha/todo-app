import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("I ran when the component loaded");

    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().title));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      title: input,
    });

    setInput("");
  };

  return (
    <div className="App">
      <h1>Todo app</h1>

      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button disabled={!input} type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>

      {todos.map((todo, i) => (
        <Todo title={todo} key={i} />
      ))}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTodos((crrArr) => [todo, ...crrArr]);
  };
  console.log(todo);
  return (
    <>
      <form onSubmit={onSubmit} className="add-form">
        <input
          type="text"
          name="title"
          placeholder="자바스크립트를 배워봅시다"
          onChange={onChange}
        ></input>
        <button type="submit">추가하기</button>
      </form>
      <h1 className="title">Todo List</h1>
      {todos.map((item) => {
        console.log(todos);
        return (
          <div className="list" key={item.id}>
            <p className="item">{item}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;

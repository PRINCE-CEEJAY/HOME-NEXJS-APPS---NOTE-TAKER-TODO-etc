"use client";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      description: input.trim(),
      itemNum: select,
      completed: false,
    };
    const existed = items.find(
      (item) =>
        item.description === newTodo.description &&
        item.itemNum === newTodo.itemNum
    );
    if (existed) {
      setError("Todo already exist");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else {
      setItems((prev) => [...prev, newTodo]);
    }
  };

  const toggleCompleted = (id) => {
    setItems((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <h1 className="text-white text-2xl text-center animate-bounce">
        {error}
      </h1>
      <Input
        select={select}
        input={input}
        setSelect={setSelect}
        setInput={setInput}
        handleSubmit={handleAdd}
      />
      <div className="grid grid-cols-4">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            selected={item.itemNum}
            onDelete={() => handleDelete(item.id)}
            toggleCompleted={() => toggleCompleted(item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;

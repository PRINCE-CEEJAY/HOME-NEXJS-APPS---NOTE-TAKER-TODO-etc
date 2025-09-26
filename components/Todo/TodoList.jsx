"use client";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";

const TodoList = ({ items, setItems }) => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [updated, setUpdated] = useState("");
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
    if (!newTodo.description) {
      setError("you must input a todo");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (newTodo.description.length < 5) {
      setError("Todo is too short");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
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
      setInput("");
    }
  };

  const toggleCompleted = (id) => {
    setItems((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleEditing = (item) => {
    setEditingId(item.id);
    setUpdated(item.description);
  };
  const handleUpdate = (item) => {
    setEditingId(null);
    setItems((prev) =>
      prev.map((edit) =>
        edit.id === item.id
          ? {
              ...edit,
              description: !updated.trim() ? edit.description : updated,
            }
          : edit
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
      <div className="grid grid-cols-3 space-x-12">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            selected={item.itemNum}
            onDelete={() => handleDelete(item.id)}
            toggleCompleted={() => toggleCompleted(item.id)}
            onEdit={() => handleEditing(item)}
            handleUpdate={() => handleUpdate(item)}
            editingId={editingId}
            updated={updated}
            setUpdated={(e) => setUpdated(e.target.value)}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;

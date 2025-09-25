"use client";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";
import Analytics from "./Analytics";
import SortTodo from "./SortTodo";
import { useState } from "react";

const TodoMain = () => {
  const [sorted, setSorted] = useState("All");
  const [items, setItems] = useState([]);
  return (
    <div className="flex flex-col min-w-full min-h-screen bg-amber-800">
      <Header />
      <Analytics items={items} />
      <TodoList items={items} setItems={setItems} />
      <SortTodo sorted={sorted} setSorted={setSorted} items={items} />
      <Footer />
    </div>
  );
};

export default TodoMain;

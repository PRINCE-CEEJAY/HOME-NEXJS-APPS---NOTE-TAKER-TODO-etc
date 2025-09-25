import React from "react";
import Header from "./Header";
import Input from "./Input";
import TodoList from "./TodoList";
import Footer from "./Footer";

const TodoMain = () => {
  return (
    <div className="flex flex-col items-center min-w-full min-h-screen bg-amber-800">
      <Header />
      <Input />
      <TodoList />
      <Footer />
    </div>
  );
};

export default TodoMain;

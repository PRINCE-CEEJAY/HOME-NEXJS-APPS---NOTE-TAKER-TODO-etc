import React from "react";

const SortTodo = ({ items, sorted, setSorted }) => {
  return (
    <div className="flex space-x-3 bg-amber-700 text-white w-full  mt-12 items-center justify-center">
      <h1 className="text-xl font-bold">Sort By:</h1>
      <select
        className="w-64 bg-black font-bold p-2 rounded-xl cursor-pointer"
        value={sorted}
        onChange={(e) => setSorted(e.target.value)}
      >
        <option>All</option>
        <option>Completed</option>
        <option>Uncompleted</option>
      </select>
    </div>
  );
};

export default SortTodo;

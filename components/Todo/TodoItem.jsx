import React from "react";

const TodoItem = ({ item, toggleCompleted, selected, onDelete }) => {
  return (
    <div className="flex space-x-3 m-3 bg-amber-600 p-1 rounded-md w-fit">
      <input
        type="checkbox"
        value={item.completed}
        onChange={toggleCompleted}
        className="cursor-pointer scale-135"
      />
      <h2 className="text-white">{selected}</h2>
      <li
        style={{ listStyle: "none", fontWeight: "bold" }}
        className={`${
          item.completed ? "text-red-800 line-through" : "text-green-800"
        }`}
      >
        {item.description}
      </li>
      <button
        className="text-red-800 font-bold cursor-pointer hover:scale-135"
        onClick={onDelete}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;

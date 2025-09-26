import React from "react";

const TodoItem = ({
  item,
  toggleCompleted,
  selected,
  onEdit,
  updated,
  editingId,
  setUpdated,
  handleUpdate,
  onDelete,
}) => {
  return (
    <div className="flex space-x-3 m-3 bg-amber-600 p-1 rounded-md w-fit">
      <input
        type="checkbox"
        value={item.completed}
        onChange={toggleCompleted}
        className="cursor-pointer scale-135"
      />
      <h2 className="text-white">{selected}</h2>
      {editingId === item.id ? (
        <div className="flex space-x-1 items-center justify-center w-fit">
          <input
            type="text"
            value={updated}
            className="w-32"
            onChange={setUpdated}
          />
          <button
            onClick={handleUpdate}
            className="text-green-800 ml-1 font-bold cursor-pointer hover:scale-135"
          >
            Update
          </button>
        </div>
      ) : (
        <li
          style={{ listStyle: "none", fontWeight: "bold" }}
          className={`${
            item.completed ? "text-red-800 line-through" : "text-green-800"
          }`}
        >
          {item.description}
        </li>
      )}
      <button
        className="text-green-800 font-bold cursor-pointer hover:scale-135"
        onClick={onEdit}
      >
        Edit
      </button>
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

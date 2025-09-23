import React from "react";

const NoteCard = ({ id, title, text, handleEditing, btnDelete, onClose }) => {
  return (
    <div className="flex flex-col w-80">
      <div className="relative bg-red-900">
        <button
          className="absolute top-1 right-3 text-black bg-red-800 cursor-pointer font-bold px-3 py-1 rounded-md hover:bg-red-600 hover:shadow-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div className="flex flex-col pt-10 w-78 h-78 p-1  bg-amber-100 text-black rounded-md shadow-lg">
        <h1 className="text-center text-2xl bg-green-400 rounded-md p-1">
          {title}
        </h1>
        <p className="h-full w-full text-blue-800 font-bold text-justify px-2">
          {text}
        </p>
        <div className="flex justify-around p-2 bg-gradient-to-bl from-yellow-400 via-red-300 to-blue-500">
          <button
            onClick={() => handleEditing(id)}
            className="bg-green-800 cursor-pointer text-white font-bold px-6 py-1 rounded-md hover:bg-green-600 hover:shadow-lg"
          >
            Edit
          </button>
          <button
            onClick={btnDelete}
            className="bg-red-800 cursor-pointer text-white font-bold px-6 py-1 rounded-md hover:bg-red-600 hover:shadow-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

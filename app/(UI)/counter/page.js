"use client";
import React, { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return { count: state.count - action.payload };
    case "increment":
      return { count: state.count + action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-6">
      <h1 className="text-5xl font-extrabold">
        USE REDUCER HOOK DEMONSTRATION
      </h1>
      <h1 className="text-4xl font-bold">{state.count}</h1>
      <div className="flex space-x-20 mt-5">
        <button
          className="bg-green-700 rounded-md cursor-pointer hover:bg-transparent hover:border border-black px-2 py-5"
          onClick={() => dispatch({ type: "decrement", payload: 5 })}
        >
          Decrement
        </button>
        <button
          className="bg-green-700 rounded-md cursor-pointer hover:bg-transparent hover:border border-black px-2 py-5"
          onClick={() => dispatch({ type: "reset", payload: 5 })}
        >
          Reset
        </button>
        <button
          className="bg-green-700 rounded-md cursor-pointer hover:bg-transparent hover:border border-black px-2 py-5"
          onClick={() => dispatch({ type: "increment", payload: 5 })}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;

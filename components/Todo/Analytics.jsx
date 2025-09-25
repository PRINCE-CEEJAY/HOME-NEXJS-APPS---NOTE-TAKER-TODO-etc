import React from "react";

const Analytics = ({ items }) => {
  const remainingTasks = items.filter((item) => !item.completed).length;
  return (
    <div>
      <p className="text-xl font-bold text-center text-white">
        You have a total of{" "}
        <span className="text-black">{items.length} todos</span> and{" "}
        <span className="text-red-600">{remainingTasks}</span> task remaining (
        <span className="text-black">
          {Math.round((remainingTasks / items.length) * 100)}%
        </span>
        )
      </p>
    </div>
  );
};

export default Analytics;

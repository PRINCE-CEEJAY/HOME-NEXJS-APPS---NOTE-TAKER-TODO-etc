import React from "react";

const Analytics = () => {
  return (
    <div>
      <p className="text-xl font-bold text-center text-white">
        You have <span className="text-red-600">0</span> task remaining -{" "}
        <span className="text-black">%</span>
      </p>
    </div>
  );
};

export default Analytics;

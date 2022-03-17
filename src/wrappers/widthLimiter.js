import React from "react";

const WidthLimiter = ({ width, children }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default WidthLimiter;

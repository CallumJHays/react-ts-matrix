import React from "react";

const Matrix = ({}) => {
  return (
    <div className="layout-grid">
      Hello World
      <style jsx>{`
        .layout-grid {
          display: grid;
          position: relative;
          left: -10px;

          & :hover {
            background-color: red;
          }
        }
      `}</style>
    </div>
  );
};

export default {
  title: "Matrix"
};

export const empty = () => <Matrix />;

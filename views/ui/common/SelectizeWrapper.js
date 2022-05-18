import React from "react";

const SelectizeWrapper = ({children}) => {
  return (
    <div className="c-select">
      <div className="c-select__dropdown">{children}</div>
    </div>
  );
};

export default SelectizeWrapper;

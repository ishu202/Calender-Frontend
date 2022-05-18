import React from "react";

const ElBody = ({children , width }) => {
  return (
    <>
      <div className={`col-lg-${width} col-md-12 col-sm-12 col-xs-12`}>
        <div className="c-form-group">{children}</div>
      </div>
    </>
  );
};

export default ElBody;

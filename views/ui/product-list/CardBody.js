import React from "react";

const CardBody = ({children}) => {
  return (
    <>
      <div className="c-card__body">
        <div className="row" style={{margin: "0", padding: "0"}}>
          {children}
        </div>
      </div>
    </>
  );
};

export default CardBody;

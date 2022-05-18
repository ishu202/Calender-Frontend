import React from "react";

const Container = ({children}) => {
  return (
    <>
      <div className="c-card"
           style={{height: "100%", borderTop: "1rem", borderTopStyle: "solid", borderTopColor: "#0058a8"}}>
        {children}
      </div>
    </>
  );
}

export default Container;

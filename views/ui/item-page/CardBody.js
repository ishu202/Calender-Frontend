import React from "react";

const CardBody = ({children}) => {
    return (
        <>
            <div className="c-card__body">
                {children}
            </div>
        </>
    );
};

export default CardBody;

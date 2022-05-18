import React from "react";

const Container = ({children}) => {
    return (
        <>
            <div className="c-card__footer">
                {children}
            </div>
        </>
    );
}

export default Container;

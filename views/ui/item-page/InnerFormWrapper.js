import React from "react";

const InnerFormWrapper = ({children}) =>{
    return(
        <>
            <div className="l-section">
                <div className="l-section__content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default InnerFormWrapper;

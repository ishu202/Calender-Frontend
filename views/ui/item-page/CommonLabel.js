import React from "react";
import ElWrapper from "./ElWrapper";

const UnitSelect = (props) =>{
    const {title, htmlFor, children} = props;


    return(
        <>
            <ElWrapper>
                <label htmlFor={htmlFor}>{title}</label>
                    {children}
            </ElWrapper>
        </>
    );
}

export default UnitSelect;

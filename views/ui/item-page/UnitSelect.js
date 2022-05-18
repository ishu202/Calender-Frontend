import React from "react";
import ElWrapper from "./ElWrapper";
import SelectizeWrapper from "../common/selectize-wrapper";

const UnitSelect = (props) =>{
    const {title, htmlFor, children} = props;


    return(
        <>
            <ElWrapper>
                <label htmlFor={htmlFor}>{title}</label>
                <SelectizeWrapper>
                    {children}
                    <span className="c-select__toggle"/>
                </SelectizeWrapper>
            </ElWrapper>
        </>
    );
}

export default UnitSelect;

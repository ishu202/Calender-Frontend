import React from "react";
import {useCalender} from "../../../store/hooks/calender.hook";

const Button = ({ props }) => {
    const { input: { type , name , value, onClick }, className} = props;
    const [calender] = useCalender();
    return (
        <>
            <input
                type={type}
                id={"rent"}
                name={name}
                value={value}
                className={className}
				disabled={!calender.selected.in_stock}
				{ ...( !!onClick ) ? { onClick } : {} }
            />
        </>
    );
};

export default Button;

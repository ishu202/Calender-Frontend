import React from "react";
import { useCalender } from "../../../store/hooks/calender.hook";
import { setAmount } from "../../../store/features/calender.slice";

const Amount = ({ props }) => {
    const { className , placeholder , label , input: { id, name , type } } = props;
    const [ calender , dispatch ] = useCalender();
    let { price , loading } = calender.selected;

    const handleAmount = (e) => {
      let value = e.target.value.replace(/[^0-9.]/g, "");
      dispatch(setAmount(value));
    }

    return (
        <div className="c-form-group">
          <label className="c-form-label" htmlFor={label.htmlFor}>{label.title}</label>
            <input
                id={id}
                name={name}
                type={type}
                className={`c-form-control ${ className }`}
                placeholder={placeholder}
                value={(!loading) ? price : "Calculating..."}
                onChange={(e) => handleAmount(e)}
            />
        </div>
    );
};

export default Amount;

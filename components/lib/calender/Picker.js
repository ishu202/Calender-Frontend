import React from "react";
import { setDateFrom , setDateTo } from "../../../store/features/calender.slice";
import { useCalender } from "../../../store/hooks/calender.hook";

import Moment from "moment";
import {extendMoment} from "moment-range";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import uuid from "react-uuid";

const moment = extendMoment(Moment);

const Picker = ({ props }) => {
  const { pick , drop ,  placeholder , className , label } = props;

  const [ calender , dispatch ] = useCalender();
  let { dd , date_from , date_to } = calender.selected;

    const handleOnChange = (e) => {
        if (e.length === 2) {
            dispatch(setDateFrom(moment(e[0]).format("YYYY-MM-DD")));
            dispatch(setDateTo(moment(e[1]).format("YYYY-MM-DD")))
        }
    };

    return (
        <div className="c-form-group">
          <label className="c-form-label" htmlFor={label.for}>{label.title}</label>
          <Flatpickr
              key={uuid()}
              data-id="rangePlugin"
              className={`c-form-control ${ className }`}
              placeholder={placeholder}
              options={{
                  altInput: true,
                  mode: "range",
                  disable: dd.reduce((memo , val) => {
                    memo.push(val.date);
                    return memo;
                  } , []),
                  defaultDate: [ date_from, date_to ],
                  minDate: moment().format("YYYY-MM-DD"),   //active for the create booking and calender widget in the website
                  maxDate: moment().add(12, "M").format("YYYY-MM-DD"),
                  altFormat: "F j, Y",
                  dateFormat: "Y-m-d",
                  onChange: (e) => {
                      handleOnChange(e);
                  },
              }}
          />
          <input id={pick.id} name={pick.name} type="hidden" value={date_from} />
          <input id={drop.id} name={drop.name} type="hidden" value={date_to} />
        </div>
    );
}

export default Picker;

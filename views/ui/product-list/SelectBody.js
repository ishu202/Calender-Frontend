import React from "react";
import Elwraper from "./ElBody";
import Select from "react-select";
import { getItem } from "../../../api/getItem";
import { useCalender } from "../../../store/hooks/calender.hook";
import { setSelectedItem } from "../../../store/features/calender.slice";

const SelectBody = ({ props  , width }) => {
  const [ calender , dispatch ] = useCalender();
  const { items , selected: { item } } = calender;
  const { label, placeholder , select } = props;
  const handleSelect = (e) => {
    getItem(e.value).then(data => dispatch(setSelectedItem(data)))
  }
  return (
    <>
      <Elwraper width={width}>
        <label className="c-form-label" htmlFor="name-selectized">{label.title}</label>
        <Select
          id={select.id}
          name={select.name}
          placeholder={placeholder}
          defaultValue={Object.values(item) || null}
          onChange={handleSelect}
          options={items.reduce((memo , value) => {
            memo.push({ value: value.id , label: value.t_name })
            return memo;
          },[])}
          required
        />
      </Elwraper>
    </>
  );
};

export default SelectBody;

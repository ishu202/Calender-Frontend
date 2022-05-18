import {createContext} from "react";

const ProductList = createContext({
  tools: {
    label: {
      title: "Select Tool",
      for: "name",
    },
    placeholder: "Select Tool",
    select: {
      id: "name",
      name: "name",
    },
    className: "tools",
  },
  unit: {
    label: {
      title: "Units",
      for: "units",
    },
    placeholder: "Select Units",
    select: {
      id: "unit",
      name: "units",
    },
    className: "c-select__control",
  },
  date: {
    label: {
      title: "Select Rental Dates",
      for: "FromTo",
    },
    placeholder: "From - To",
    pick: {
      id: "pickDate",
      name: "from"
    },
    drop: {
      id: "dropDate",
      name: "to"
    },
    className: "dates",
  },
  time: {
    pick_s: {
      id: "pickTime",
      name: "pick",
      label: {
        title: "Pick-Up Time",
        for: "pick",
      },
      placeholder: "Pick Up",
      className: "pick",
    },
    drop_s: {
      id: "dropTime",
      name: "drop",
      label: {
        title: "Drop-Off Time",
        for: "drop",
      },
      placeholder: "Drop Off",
      className: "drop",
    },
  },
  amount: {
    label: {
      title: "Amount",
      htmlFor: "amount",
    },
    placeholder: "Amount",
    input: {
      id: "amount",
      type: "text",
      name: "amount",
    },
    className: "amount",
  },
  AddRow: {
    input: {
      type: "button",
      name: "add_row",
      value: "Add Item"
    },
    className: "c-button c-button--block c-button--primary",
  }
});

export default ProductList;

import {createContext} from "react";

const ItemPage = createContext({
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
      title: "Rental Period",
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
    className: "c-form-control",
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
      className: "c-form-control",
    },
    drop_s: {
      id: "dropTime",
      name: "drop",
      label: {
        title: "Drop-Off Time",
        for: "drop",
      },
      placeholder: "Drop Off",
      className: "c-form-control",
    },
  },
  amount: {
    rounded: true,
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
      type: "submit",
      name: "rent",
      value: "Rent"
    },
    className: "c-button c-button--block c-button--success",
  }
});

export default ItemPage;

import React from "react";
import AmountItemWrapper from "../../../views/ui/item-page/AmountItemWrapper";
import { useCalender } from "../../../store/hooks/calender.hook";

const Amount = ({ props }) => {
    const [ calender ] = useCalender();
    let { heading ,  price , date_from , date_to } = calender.selected;

	return (
		<>
				<AmountItemWrapper rounded={ props.rounded }>
					<p className="text-2xl">
						{price === 0 ? "Calculating..." : `$${ price }` }
					</p>
					<span id="price_heading">{heading}</span>
				</AmountItemWrapper>
		</>
	);
};

export default Amount;

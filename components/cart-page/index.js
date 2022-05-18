import React, {useRef, useContext} from "react";
import {useCalender} from "../../store/hooks/calender.hook";
import {setDeliveryMethod} from "../../store/features/calender.slice";

import Container from "../../views/ui/item-page/Container";
import Heading from "../../views/ui/item-page/HeadWrapper";
import Row from "../../views/ui/common/Row";
import Col from "../../views/ui/common/Col";
import Overlay from "../../views/ui/common/Overlay";
import Amount from "../lib/calender/AmountItem";
import Picker from "../lib/calender/Picker";
import Units from "../lib/calender/Units";
import Times from "../lib/calender/Times";
import Radio from "../../views/ui/common/Radio";
import CartPageSetting from "../../views/structure/CartPage";

const CartPage = () => {
	let [ calender , dispatch ] = useCalender();
	let { date, time , unit, amount } = useContext(CartPageSetting);

	let { loading , selected: { item , price, delivery_method } } = calender;
	let radioRef = useRef();

	return (
		<>
			<Overlay>
				<Row>
					<Col columns={{ lg: 10 }}>
						<div className="row" style={{ margin: 0 }}>
							<Col columns={{ lg: 6 }}>
								<Picker props={ date } />
							</Col>

							<Col columns={{ lg: 6 }}>
								<Units props={ unit } />
							</Col>

							<Col columns={{ lg: 12 }}>
								<Times props={{ ...time, columns: { lg: 6 }}}/>
							</Col>
						</div>
					</Col>

					<div className="col-lg-2 col-md-12 col-sm-12 col-xs-12 flex">
						<div className="row" style={{ margin: 0, flex: 1 }}>
							<div className="flex justify-center items-center text-xl">
								<Amount props={ amount } />
								<input type="hidden" name="price" value={ parseFloat( price ) } />
							</div>
						</div>
					</div>

					<Col columns={{ lg: 12 }}>
						{
							(!loading) ? (
								(item.deliverable.length) ? (
									<div className="c-form-group">
										<Radio
											ref={radioRef}
											label={"Select a pickup/delivery method"}
											name={"delivery_method"}
											options={item.deliverable}
											attributes={{
												onClick: (e) => {
													let radio = e.currentTarget.querySelector('input[type="radio"]');
													radio.checked = true;
													dispatch(setDeliveryMethod(radio.value))
												},
												value: delivery_method
											}}
										/>
									</div>
								) : null
							) : null
						}
					</Col>
				</Row>
			</Overlay>
		</>
	);
}

export default CartPage;

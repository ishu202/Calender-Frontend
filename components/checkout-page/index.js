import React, { useContext, useRef } from "react";
import { useCalender } from '../../store/hooks/calender.hook';
import {resetStore, setDeliveryMethod} from '../../store/features/calender.slice';

import SelectTools from "../../views/ui/product-list/SelectBody";
import Row from "../../views/ui/common/Row";
import Col from "../../views/ui/common/Col";
import Overlay from "../../views/ui/common/Overlay";
import Amount from "../lib/calender/Amount";
import Picker from "../lib/calender/Picker";
import Units from "../lib/calender/Units";
import Times from "../lib/calender/Times";
import Radio from "../../views/ui/common/Radio";
import Add from '../lib/calender/Button';
import CheckoutPageSetting from "../../views/structure/CheckoutPage";
import uuid from "react-uuid";

const CheckoutPage = () => {
	let [ calender , dispatch ] = useCalender();
	let { tools, date, time , unit, amount, AddRow } = useContext(CheckoutPageSetting);

	let { loading , selected: { item , price, delivery_method } } = calender;
	let radioRef = useRef();

	return (
		<>
			<Overlay>
				<Row>
					<Col>
						<SelectTools props={tools} width={12} />
					</Col>

					{
						( !loading && Object.keys(item).length > 0 ) &&
							<>
								<Col columns={{ lg: 12 }}>
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

								<Col columns={{ lg: 12 }}>
									<Amount props={amount} />
								</Col>

								<Col columns={{ lg: 12 }}>
									{
										(item.deliverable?.length) ? (
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
									}
								</Col>
							</>
					}
				</Row>
			</Overlay>

			<Col columns={{ lg: 12 }}>
				<Add props={{
					...AddRow,
					input: {
						...AddRow.input,
						onClick: e => {
							e.preventDefault();

							// Dispatch an event with the item information
							let item = calender.selected;
							let res = {
								id: uuid(),
								tool_id: +item.item.id,
								tool_name: item.item.t_name,
								units: +item.units.value,
								pick_up_date: item.date_from,
								drop_off_date: item.date_to,
								pick_time: item.pick_time.p_value,
								drop_time: item.drop_time.d_value,
								amount: Number(item.price),
								slug: item.item.slug,
								delivery_method: item.delivery_method
							};
							window.dispatchEvent( new CustomEvent( 'calenderwidget:addItem', {
								detail: res
							}));

							// Clear the selected item
							dispatch( resetStore() );
						}
					}
				}}/>
			</Col>
		</>
	);
};

export default CheckoutPage;

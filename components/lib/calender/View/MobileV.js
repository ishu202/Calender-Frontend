import React, { useState } from "react";
import moment from "moment";

import FromPicker from "react-mobile-datepicker";
import ToPicker from "react-mobile-datepicker";
import Col from "../../../../views/ui/common/Col";

import { useCalender } from "../../../../store/hooks/calender.hook";
import { setDropTimeValue, setPickTimeValue } from "../../../../store/features/calender.slice";

const MobileV = (props) => {
	const { columns } = props;

    const [isOpenFrom, setIsOpenFrom] = useState(false);
    const [isOpenTo, setIsOpenTo] = useState(false);

    const [ calender , dispatch ] = useCalender();
    let { loading } = calender;
    let { in_stock , pick_time: { p_range , p_value } , drop_time: { d_range , d_value } } = calender.selected;

    //setting ui vars
    const { pick , drop } = props;

    const dateConfig = {
        hour: {
            format: "hh",
            caption: "Hour",
            step: 1,
        },
        minute: {
            format: "mm",
            caption: "Min",
            step: 1,
        },
    };

    const handleClick = (opt) => {
        if (opt === "from") {
            setIsOpenFrom(true);
        } else if (opt === "to") {
            setIsOpenTo(true);
        }
    };

    const handleCancel = () => {
        setIsOpenFrom(false);
        setIsOpenTo(false);
    };

    const handleSelect = (time, opt) => {
        if (opt === "from") {
            setIsOpenFrom(false);
            dispatch(setPickTimeValue(moment(time).toDate().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })))
        } else if (opt === "to") {
            setIsOpenTo(false);
            dispatch(setDropTimeValue(moment(time).toDate().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })))
        }
    };


        return (
          (!loading && p_range.length === 2  && d_range.length === 2 ) &&
            <>
				<Col columns={ columns }>
					<label className="c-form-label" htmlFor="pick">Pick Up</label>
						<input
							className={`c-form-control ${ pick.className }`}
							value={
							  moment( p_value || p_range[0] , "LT" ).toDate().toLocaleString("en-US", {
								hour: "numeric",
								minute: "numeric",
								hour12: true,
							  })
							}
							onClick={() => {
								handleClick("from");
							}}
							readOnly
							disabled={!in_stock}
						/>
						<FromPicker
							value={ moment( p_value || p_range[0] , "LT" ).toDate() }
							showCaption={true}
							min={moment(p_range[0] , "LT").toDate()} //works
							max={moment(p_range[1] , "LT").toDate()} //works
							dateConfig={Object.assign(dateConfig, { hour: { format: (value) => ( value.getHours() > 12  ) ? value.getHours() % 12 : value.getHours() } })} //works
							isOpen={isOpenFrom} //works
							onSelect={(time) => handleSelect(time, "from")}
							onCancel={handleCancel}
							customHeader={moment( p_value || p_range[0] , "LT" ).toDate().toLocaleString("en-US", {
								hour: "numeric",
								minute: "numeric",
								hour12: true,
							})}
							confirmText="Ok"
							cancelText="Cancel"
						/>
						<input
							type="hidden"
							id={pick.id}
							name={pick.name}
							value={
							  moment( p_value || p_range[0] , "LT" ).toDate().toLocaleString("en-US", {
										hour: "numeric",
										minute: "numeric",
										hour12: false,
									})
							}
						/>
				</Col>

                {/**
                 * second time picker
                 */}
				<Col columns={ columns }>

                <label className="c-form-label" htmlFor="drop">Drop Off</label>
                    <input
                        className={`c-form-control ${ drop.className }`}
                        value={
                          moment( d_value || d_range[1] , "LT" ).toDate().toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                        onClick={(e) => {
                            handleClick("to");
                            e.preventDefault();
                        }}
                        readOnly
						disabled={!in_stock}
                    />
                    <ToPicker
                        value={moment( d_value || d_range[1] , "LT" ).toDate()}
                        showCaption={true}
                        min={moment(d_range[0], "hh:mm aa").toDate()} //works
                        max={moment(d_range[1], "hh:mm aa").toDate()} //works
                        dateConfig={Object.assign(dateConfig, { hour: { format: (value) => ( value.getHours() > 12  ) ? value.getHours() % 12 : value.getHours() } })} //works
                        isOpen={isOpenTo} //works
                        onSelect={(time) => handleSelect(time, "to")}
                        onCancel={handleCancel}
                        customHeader={moment( d_value || d_range[1] , "LT" ).toDate().toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })}
                        confirmText="Ok"
                        cancelText="Cancel"
                    />
                    <input
                        type="hidden"
                        id={drop.id}
                        name={drop.name}
                        value={
                          moment( d_value || d_range[1] , "LT" ).toDate().toLocaleString("en-US", {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: false,
                          })
                        }
                    />
				</Col>
            </>
        );
};

export default MobileV;

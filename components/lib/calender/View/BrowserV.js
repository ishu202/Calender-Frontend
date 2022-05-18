import React, { useState, useRef, useLayoutEffect }  from "react";
import moment from "moment";

import { BrowserView } from "react-device-detect";
import Flatpicker from "react-flatpickr";
import Col from "../../../../views/ui/common/Col";

import { useCalender } from "../../../../store/hooks/calender.hook";
import { setDropTimeValue , setPickTimeValue } from "../../../../store/features/calender.slice";

const BrowserV = (props) => {
    const { pick , drop, columns } = props;
    const [ calender , dispatch ] = useCalender();
    const { loading } = calender;
    let { in_stock, date_from, date_to, pick_time: { p_range , p_value } , drop_time: { d_range , d_value } } = calender.selected;

	const [ initialized, setInitialized ] = useState( false );
	const pickRef = useRef( null );
	const dropRef = useRef( null );

	useLayoutEffect(() => {
		if ( pickRef.current && dropRef.current ) {
			if ( !initialized ) {
				// Set the initial pick and drop values
				pickRef.current.flatpickr?.setDate( moment( p_value, "LT" ).toDate() );
				dropRef.current.flatpickr?.setDate( moment( d_value, "LT" ).toDate() );

				// Ensure the ranges for the inputs are correct
				pickRef.current.flatpickr?.set( 'maxDate', moment( d_value, "LT" ).toDate() );
				dropRef.current.flatpickr?.set( 'minDate', moment( p_value, "LT" ).toDate() );

				// Set the initialized flag on the component
				setInitialized( true );
			}
		}
	}, [ initialized, pickRef, dropRef, p_value, d_value ]);

	const handleChange = ( type ) => ( date, dateStr, instance ) => {
		switch ( type ) {
			case "from":
				// Get the current value from the input
				const pickTime = moment( date[0], "LT" );

				// Update the value in the store
				dispatch( setPickTimeValue( pickTime.format("H:mm A") ) );
				break;

			case "to":
				// Get the current value from the input
				const dropTime = moment( date[0], "LT" );

				// Update the value in the store
				dispatch( setDropTimeValue( dropTime.format("H:mm A") ) );
				break;
		}
	}

	const handleClose = ( type ) => ( date, dateStr, instance ) => {
		switch ( type ) {
			case "from":
				// Get the date object from the updated pick-up time
				const pickTime = moment( `${ date_from } ${ moment( date[0] ).format( "HH:mm" ) }` ).toDate();

				// Update the minimum range of the drop input
				dropRef.current.flatpickr.set( 'minDate', pickTime );
				break;

			case "to":
				// Get the date object from the updated drop-off time
				const dropTime = moment( `${ date_to } ${ moment( date[0] ).format( "HH:mm" ) }` ).toDate();

				// Update the maximum range of the pick input
				pickRef.current.flatpickr.set( 'maxDate', dropTime );
				break;
		}
	}

    return (
      (!loading && !!p_value  && !!d_value ) &&
        <>
			<Col columns={ columns }>
				<div className="c-form-group" style={{ padding: 0 }}>
					<label className="c-form-label" htmlFor="pick">Pick Up</label>
					<BrowserView>
						<Flatpicker
							id={"pick_id"}
							key="pick"
							ref={ pickRef }
							className={`c-form-control ${ pick.className }`}
							options={{
								enableTime: true,
								noCalendar: true,
								dateFormat: "h:i K",
								disableMobile: true,
								minDate: moment(p_range[0] , "LT").format("H:mm A"),
								maxDate: moment(p_range[1] , "LT").format("H:mm A"),
								defaultDate: moment( p_value || p_range[0]  , "LT").format("H:mm A"),
							}}
							placeholder={pick.placeholder}
							onChange={ handleChange( "from" ) }
							onClose={ handleClose( "from" ) }
							autoComplete="off"
						/>
						<input
							type="hidden"
							id={pick.id}
							name={pick.name}
							value={
							  p_value || moment( p_range[0] , "LT").format("H:mm A")
							}
						/>
					</BrowserView>
				</div>
			</Col>

			<Col columns={ columns }>
				{/**
				 * second time picker
				 */}
				<div className="c-form-group" style={{ padding: 0 }}>
					<label className="c-form-label" htmlFor="drop">Drop Off</label>
					<BrowserView>
						<Flatpicker
							id={"drop_id"}
							key="drop"
							ref={ dropRef }
							className={`c-form-control ${ drop.className }`}
							options={{
								enableTime: true,
								noCalendar: true,
								dateFormat: "h:i K",
								disableMobile: true,
								minDate: moment(d_range[0] , "LT").format("H:mm A"),
								maxDate: moment( d_range[1] , "LT").format("H:mm A"),
								defaultDate: moment( d_value || d_range[1] , "LT").format("H:mm A"),
							}}
							placeholder={drop.placeholder}
							onChange={ handleChange( "to" ) }
							onClose={ handleClose( "to" ) }
							autoComplete="off"
						/>

						<input
							id={drop.id}
							type="hidden"
							name={drop.name}
							value={
							  d_value || moment( d_range[1] , "LT").format("H:mm A")
							}
						/>
					</BrowserView>
				</div>
			</Col>
		</>
    );
};

export default BrowserV;

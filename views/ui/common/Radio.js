import React, {useCallback, useEffect, useRef, useState} from 'react';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Radio = React.forwardRef(({
   name,
   label,
   options = [],
   attributes = {}
} , ref) => {
	const [ checked , setChecked ] = useState(attributes.value);

	useEffect(( ) => {
		setChecked(attributes.value);
	}, [attributes.value])
	// console.log(value)
	// RENDER COMPONENT
	// ------------------------------------------------------------------------
	return (
		<>
			<label className="c-form-label" htmlFor={ name }
			>{ label }</label>
			<div className="c-radio-card-group">
				{
					options.map(( option , key ) => (
						<div className="c-radio-card" key={`${name}-${key}`} onClick={attributes.onClick}>
							<label className="c-form-label" htmlFor={ `${ name }` } />
							<input
								ref={ref}
								className="c-radio-card__control"
								type="radio"
								name={ name }
								value={ option.id }
								checked={+option.id === checked}
								onChange={(e) => setChecked(e.currentTarget.value)}
							/>
							<div className="c-radio-card__content">
								<div className="c-radio-card__content">
									<div className="c-radio-card__header py-2">
										<h4 style={{marginBottom: "0px" }} >{ option.type.replace( /\b(\w)/g, ( match ) => match.toUpperCase() ) }</h4>
										<FontAwesomeIcon icon={faCheckCircle} className="can-animate" size="2x" />
									</div>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</>
	)
})

export default Radio;

import React from "react";
import cx from "classnames";

const AmountItemWrapper = (props) => {
	return (
		<div className={cx([ 'l-section', { 'l-section--rounded-bottom': props.rounded } ])}>
			<div className="l-section__content">
				{props.children}
			</div>
		</div>
	);
}

export default AmountItemWrapper;

import React, { useMemo } from "react";
import cx from "classnames";

const defaultColumns = {
	lg: 12,
	md: 12,
	sm: 12,
	xs: 12
}

const Col = ({
	columns = {},
	children
}) => {
	const colClasses = useMemo(() => {
		return Object.entries( Object.assign( defaultColumns, columns ) )
			.map(([ key, value ]) => `col-${ key }-${ value }` );
	}, [ columns ]);

	return(
		<div className={ cx( colClasses ) }>
			{children}
		</div>
	);
}

export default Col;

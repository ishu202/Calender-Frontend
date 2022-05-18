import React from "react";
import BrowserV from "./View/BrowserV";
import MobileV from "./View/MobileV";
import Row from "../../../views/ui/common/Row";

import {
    isBrowser,
    isMobile,
    isTablet
} from "react-device-detect";

const Times = ({ props }) => {
    const { pick_s , drop_s, columns } = props;

	return (
		<div className="row" style={{ margin: 0, padding: 0 }}>
			{
				isBrowser && !isTablet &&
				<BrowserV
					pick={pick_s}
					drop={drop_s}
					columns={columns}
				/>
			}

			{
				(isTablet || isMobile) &&
				<MobileV
					pick={pick_s}
					drop={drop_s}
					columns={columns}
				/>
			}
		</div>
	);
};

export default Times;

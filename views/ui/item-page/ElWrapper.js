import React from "react";

const ElBody = ({children}) => {
return (
<>
    <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {children}
        </div>
    </div>
</>
);
};

export default ElBody;

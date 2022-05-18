import React from "react";
import { css } from "@emotion/react";
import {FadeLoader} from "react-spinners";
import { useCalender } from "../../../store/hooks/calender.hook";

const OverlayEL = (props) => {
  const { children } = props;
  const [ calender , ] = useCalender();
  const override = css`
      display: block;
      margin: 0 auto;
      border-color: rgba(0, 0, 0, 0.5);
    `;

  return (
    <>
      { (
        <div className={calender.loading ? "loading-react" : null}>
          <FadeLoader
            css={override}
            size={150}
            color={"#198754"}
            loading={calender.loading}
          />
        </div>
      )}
      {children}
    </>
  );
};

export default OverlayEL;

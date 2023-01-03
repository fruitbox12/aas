import React from "react";
import { SvgIcon } from "@material-ui/core";

const EthIconPath = () => {
  return (
    <>
      <path d="M1.5 390L235.5 1L471 390L235.5 529L1.5 390Z" stroke="black" />
      <path d="M235.5 767L1.5 436.5L235.5 574L471 436.5L235.5 767Z" stroke="black" />
    </>
  );
};

export const EthIcon2 = ({ className }) => {
  return (
    <SvgIcon className={className} viewBox={"0 0 472 768"}>
      <EthIconPath />
    </SvgIcon>
  );
};

export default EthIcon2;

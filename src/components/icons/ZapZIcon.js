import React from "react";
import { SvgIcon } from "@material-ui/core";

const ZapZIconPath = () => {
  return (
    <>
      <path d="M307.2 0L0 580.181H214.357V955.592L512 375.411H307.2V0Z" />
    </>
  );
};

export const ZapZIcon = ({ className }) => {
  return (
    <SvgIcon className={className} viewBox={"0 0 512 956"}>
      <ZapZIconPath />
    </SvgIcon>
  );
};

export default ZapZIcon;
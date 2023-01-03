import React from "react";
import { SvgIcon } from "@material-ui/core";

const EthIconPath = () => {
   return (
      <>
         <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
      </>
   );
};

export const EthIcon = ({className}) => {
   return (
      <SvgIcon className={className} viewBox={"0 0 30 30"}>
         <EthIconPath />
      </SvgIcon>
   );
};

export default EthIcon;

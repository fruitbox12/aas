import React from "react";
import ExpandedOracleMarketView from "src/views/expandedoraclemarket/index.js";

//Component Itself
function TokenMarketView() {
   return (
      <>
         <ExpandedOracleMarketView tokenMarket={true} />
      </>
   );
}

export default TokenMarketView;

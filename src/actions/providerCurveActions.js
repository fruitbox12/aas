import { ProviderCurve } from "src/reducers/classes/providercurvedata.js";

export const INITIATE_PROVIDER_CURVE = "@curve/initiate-provider-curve";
export const SUBMIT_PROVIDER_CURVE = "@curve/submit-provider-curve";
export const RETRIEVE_PROVIDER_CURVES = "@curve/retrieve-provider-curves";
export const CLEAR_PROVIDER_CURVE = "@curve/delete-provider-curve";

export function initiateProviderCurve(endpoint, userAddress) {
  const curveId = userAddress.concat(endpoint);
  return {
    type: INITIATE_PROVIDER_CURVE,
    payload: curveId
  };
}

export function submitProviderCurve(existingCoefficientArray, bondedDots, endpoint, userAddress) {
  const curve = new ProviderCurve(existingCoefficientArray, bondedDots);
  const curveId = userAddress.concat(endpoint);
  return {
    type: SUBMIT_PROVIDER_CURVE,
    payload: { curve: curve, curveId: curveId }
  };
}

// Should be dispatched from oracle market
// export function retrieveProviderCurves(oracleData) {
//    let data = {}
//    oracleData.map((row) => {
//       // Note that oracleData indices do not match keys declared in oracledata.js (@Justin will need to unify syntax)
//       // unique id should be endpoint address + oracle name
//       data[row.endpoint] = { existingCoefficientArray: row[existingCoefficientArray], bondedDots: row[bondedDots] }
//    })
//    return {
//       type: RETRIEVE_PROVIDER_CURVES,
//       payload: data
//    }
// }

/**
 * To clear the provider curve for refresh
 */
export function clearProviderCurve() {
  return {
    type: CLEAR_PROVIDER_CURVE,
    payload: null
  };
}

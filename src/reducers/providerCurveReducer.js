/* eslint-disable no-param-reassign */
import produce from "immer";
import { INITIATE_PROVIDER_CURVE, SUBMIT_PROVIDER_CURVE, CLEAR_PROVIDER_CURVE } from "src/actions/providerCurveActions"; 
import { ProviderCurve } from "src/reducers/classes/providercurvedata.js";

/**
 * key: index of Provider Curve class
 * value: JS object of Provider Curve Params
 */
const initialState = {
   providerCurve: {},
  // providerCurve: { { 0: { eCA: [], bondedDots: 0 } },
  //                   { 1: { eCA: [], bondedDots: 0 } }
  // },
};

/*
ProviderCurve Object Format
    providerCurve: {
      existingCoefficientArray: [],
      bondedDots: 0
    }
*/

/**
 * @param {Object} state The current state of the application in the Redux store
 * @param {Object} action The object of the "type" of state change happening and data to be changed
 */

 //default provider curve is empty coefficient array with 0 bonded dots
const defaultCurve = new ProviderCurve([], 0)

const providerCurveReducer = (state = initialState, action) => {
  switch (action.type) {

    // Initiation of provider curve creation (in creation wizard)
    case INITIATE_PROVIDER_CURVE: {
      const curveId = action.payload;
      return produce(state, (draft) => {
        draft.providerCurve = {[curveId] : defaultCurve};
      })
    }
    // Submitting of confirmed provider curve (in creation wizard)
    case SUBMIT_PROVIDER_CURVE: {
      const providerCurveParams = { [action.payload.curveId]: action.payload.curve };
      return produce(state, (draft) => {
          draft.providerCurve = providerCurveParams;
        });
    }
      
    //oraclemarkettable.js
      // oracledata
      // dispatch(action(oracleData))
        // inner oracleData.map()
        // return {type: retrieve, payload: { 0x4a: {ecA: [1,1,1], bondedDots: 1}, 0x4b: {ecA: [1,1,1], bondedDots: 1}} }
      
    // case RETRIEVE_PROVIDER_CURVES: {
    //   const providerCurvesByAddress = action.payload;
    //     return produce(state, (draft) => {
    //       draft.providerCurve = providerCurvesByAddress;
    //     });
    // }

    // When the provider curve needs to be reloaded
    case CLEAR_PROVIDER_CURVE: {
        return produce(state, (draft) => {
          draft.providerCurve = {};
        });
    }

    // The reducer is called but no "type" was given to the action
    default: {
        return state;
    }
  }
};

export default providerCurveReducer;

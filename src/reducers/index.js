import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import accountReducer from "./accountReducer";
import notificationsReducer from "./notificationsReducer";
import chatReducer from "./chatReducer";
import mailReducer from "./mailReducer";
import kanbanReducer from "./kanbanReducer";
import oracleReducer from "./oraclereducer.js";
import transactionReducer from "./transactionReducer.js"
import providerCurveReducer from "./providerCurveReducer.js";

const rootReducer = combineReducers({
   account: accountReducer,
   notifications: notificationsReducer,
   chat: chatReducer,
   mail: mailReducer,
   kanban: kanbanReducer,
   form: formReducer,
   oracles: oracleReducer,
   transactions: transactionReducer,
   providerCurve: providerCurveReducer,
});

export default rootReducer;

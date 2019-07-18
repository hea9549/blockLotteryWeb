import { combineReducers } from "redux";
import counter, { ICounterState } from "./counter";

export interface IStoreState {
    counter: ICounterState;
}

export default combineReducers({
    counter,
});

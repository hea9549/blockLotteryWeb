import {createAction, handleActions} from "redux-actions";

const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const actionCreators = {
    decrement: createAction(DECREMENT),
    increment: createAction(INCREMENT),
};

export interface ICounterState {
    value: number;
}

const initialState: ICounterState = {
    value: 0,
};

export default handleActions<ICounterState>(
    {
        [DECREMENT]: (state: ICounterState) => ({value: state.value - 1}),
        [INCREMENT]: (state: ICounterState) => ({value: state.value + 1}),
    },
    initialState,
);

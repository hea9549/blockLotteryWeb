import {applyMiddleware, compose, createStore, Store} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";

export default function configureStore() {
    const storeEnhancers = compose(
        applyMiddleware(thunk),
    );
    return createStore(
        reducer, /* preloadedState, */
        storeEnhancers,
    );
}

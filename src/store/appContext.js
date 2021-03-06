import React, {useState, useEffect} from "react";
import { getState } from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {

    const StoreWrapper = (props) => {
        const [state, setState] = useState(
            getState({
                getActions: () => state.actions,
                getStore: () => state.store,
                setStore: updatedStore => setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: {...state.actions}
                })
            })
        );

        useEffect(() => {
            state.actions.getCategories()
            state.actions.getProducts()
            state.actions.getStorename()
        }, [])
        

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
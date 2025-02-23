import { useReducer } from "react";

type FilterState = {
    propertyName: string;
    operator: string;
    propertyValue: string;
};

export type ActionTypes =
    | "SET_PROPERTY_VALUE"
    | "SET_OPERATOR"
    | "SET_PROPERTY_NAME"
    | "RESET";
interface Action {
    type: ActionTypes;
    payload: string;
}

const initialState: FilterState = {
    propertyName: "",
    operator: "",
    propertyValue: "",
};

const filterReducer = (state: FilterState, action: Action): FilterState => {
    switch (action.type) {
        case "SET_PROPERTY_NAME":
            return { ...state, propertyName: action.payload };
        case "SET_OPERATOR":
            return { ...state, operator: action.payload };
        case "SET_PROPERTY_VALUE":
            return { ...state, propertyValue: action.payload };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

export const useFilter = () => {
    const [filters, dispatch] = useReducer(filterReducer, initialState);

    return {
        filters,
        updatePropertyName: (value: string) => dispatch({ type: "SET_PROPERTY_NAME", payload: value }),
        updateOperator: (value: string) => dispatch({ type: "SET_OPERATOR", payload: value }),
        updatePropertyValue: (value: string) => dispatch({ type: "SET_PROPERTY_VALUE", payload: value }),
        resetFilters: () => dispatch({ type: "RESET", payload: "" }),
    };
};

export default useFilter;
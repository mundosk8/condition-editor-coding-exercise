import {
    getOperators as fetchOperators,
    getProperties,
} from "@/datastore";
import { ALLOWED_OPERATORS_ENUMERATORS, ALLOWED_OPERATORS_NUMBERS, ALLOWED_OPERATORS_STRINGS } from "@/constants/allowedOperators";

export const getOperators = (property: string) => {
    const operators = fetchOperators();
    const properties = getProperties();

    const propertyFiltered = properties.find((p) => p.id === Number(property));

    if (!propertyFiltered) {
        return operators;
    }

    switch (propertyFiltered.type) {
        case "string":
            return operators.filter((o) =>
                ALLOWED_OPERATORS_STRINGS.some((aos) => aos === o.id)
            );
        case "number":
            return operators.filter((o) =>
                ALLOWED_OPERATORS_NUMBERS.some((aos) => aos === o.id)
            );
        case "enumerated":
            return operators.filter((o) =>
                ALLOWED_OPERATORS_ENUMERATORS.some((aos) => aos === o.id)
            );
        default:
            return operators;
    }
}
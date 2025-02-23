import { getProducts, getProperties } from "@/datastore";
import {
    filterProductsWithOperatorEqual,
    filterProductsWithOperatorGreaterThan,
    filterProductsWithOperatorLessThan,
    filterProductsWithOperatorAny,
    filterProductsWithOperatorNone,
    filterProductsWithOperatorIn,
    filterProductsWithOperatorContains
} from "@/utils";

export const getFilteredProducts = (
    property: number | string | null,
    operator: string | null,
    value: number | string | null
) => {
    const products = getProducts();
    const properties = getProperties();

    switch (operator) {
        case "equals":
            return {
                products: filterProductsWithOperatorEqual(products, value),
                properties,
            };
        case "greater_than":
            return {
                products: filterProductsWithOperatorGreaterThan(
                    products,
                    Number(value)
                ),
                properties,
            };
        case "less_than":
            return {
                products: filterProductsWithOperatorLessThan(products, Number(value)),
                properties,
            };
        case "any":
            return {
                products: filterProductsWithOperatorAny(products, property),
                properties,
            };
        case "none":
            return {
                products: filterProductsWithOperatorNone(products, property),
                properties,
            };
        case "in":
            return {
                products: filterProductsWithOperatorIn(products, String(value)),
                properties,
            };
        case "contains":
            return {
                products: filterProductsWithOperatorContains(
                    products,
                    property,
                    String(value)
                ),
                properties,
            };

        default: {
            return { products, properties };
        }
    }
}
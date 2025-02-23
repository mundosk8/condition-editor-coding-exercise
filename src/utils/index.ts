import { Product } from "@/datastore";

const filterProducts = (
  products: Product[],
  predicate: (pv: { property_id: number; value: string | number }) => boolean
) => {
  return products.filter((product) =>
    product.property_values.some(predicate)
  );
};

export const filterProductsWithOperatorEqual = (
  products: Product[],
  value: string | number | null
) => {
  if (value == null || value === '') {
    return [];
  }

  return filterProducts(products, (pv) => pv.value == value);
};

export const filterProductsWithOperatorGreaterThan = (
  products: Product[],
  value: number
) => {
  return filterProducts(products, (pv) => Number(pv.value) > value);
};

export const filterProductsWithOperatorLessThan = (
  products: Product[],
  value: number
) => {
  return filterProducts(products, (pv) => Number(pv.value) < value);
};

export const filterProductsWithOperatorAny = (
  products: Product[],
  property: number | string | null
) => {
  if (property == null || property === '') {
    return [];
  }

  return filterProducts(products, (pv) => Number(pv.property_id) === Number(property));
};

export const filterProductsWithOperatorNone = (
  products: Product[],
  property: number | string | null
) => {
  if (property == null || property === '') {
    return [];
  }

  return products.filter(
    (product) =>
      !product.property_values.some((pv) => Number(pv.property_id) === Number(property))
  );
};

export const filterProductsWithOperatorIn = (
  products: Product[],
  values: string
) => {
  const v = values ? values.split(",").map((va: string) => va.trim()) : [];

  return filterProducts(products, (pv) => v.includes(String(pv.value)));
};

export const filterProductsWithOperatorContains = (
  products: Product[],
  property: number | string | null,
  value: string
) => {
  if (property == null || property === '') {
    return [];
  }

  return filterProducts(
    products,
    (pv) =>
      pv.property_id === Number(property) &&
      String(pv.value).toLowerCase().includes(value.toLowerCase())
  );
};

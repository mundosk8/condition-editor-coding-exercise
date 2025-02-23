import { getProducts, Product } from "@/datastore";
import {
  filterProductsWithOperatorAny,
  filterProductsWithOperatorContains,
  filterProductsWithOperatorEqual,
  filterProductsWithOperatorGreaterThan,
  filterProductsWithOperatorIn,
  filterProductsWithOperatorLessThan,
  filterProductsWithOperatorNone,
} from "@/utils";
import { describe, it, expect } from "vitest";

describe("filterProductsWithOperatorEqual", () => {
  it("should return a list with products equal to the given value", () => {
    const expected = [
      {
        id: 0,
        property_values: [
          {
            property_id: 0,
            value: "Headphones",
          },
          {
            property_id: 1,
            value: "black",
          },
          {
            property_id: 2,
            value: 5,
          },
          {
            property_id: 3,
            value: "electronics",
          },
          {
            property_id: 4,
            value: "false",
          },
        ],
      },
    ];
    const result = filterProductsWithOperatorEqual(getProducts(), "Headphones");
    expect(result).toEqual(expected);
  });

  it("should return an empty list if the given value doesn't exist", () => {
    const expected: Product[] = [];
    const result = filterProductsWithOperatorEqual(getProducts(), "foo");
    expect(result).toEqual(expected);
  });
});

describe("filterProductsWithOperatorGreaterThan", () => {
  it("should return a list with products greater than to the given value", () => {
    const expected = [
      {
        id: 5,
        property_values: [
          {
            property_id: 0,
            value: "Hammer",
          },
          {
            property_id: 1,
            value: "brown",
          },
          {
            property_id: 2,
            value: 19,
          },
          {
            property_id: 3,
            value: "tools",
          },
        ],
      },
    ];
    const result = filterProductsWithOperatorGreaterThan(getProducts(), 5);
    expect(result).toEqual(expected);
  });

  it("should return an empty list if there is none product greater than the given value", () => {
    const expected: Product[] = [];
    const result = filterProductsWithOperatorGreaterThan(getProducts(), 20);
    expect(result).toEqual(expected);
  });
});

describe("filterProductsWithOperatorLessThan", () => {
  it("should return a list with products less than to the given value", () => {
    const expected = [
      {
        id: 4,
        property_values: [
          {
            property_id: 0,
            value: "Key",
          },
          {
            property_id: 1,
            value: "silver",
          },
          {
            property_id: 2,
            value: 1,
          },
          {
            property_id: 3,
            value: "tools",
          },
        ],
      },
    ];
    const result = filterProductsWithOperatorLessThan(getProducts(), 3);
    expect(result).toEqual(expected);
  });

  it("should return an empty list if there is none product greater than the given value", () => {
    const expected: Product[] = [];
    const result = filterProductsWithOperatorLessThan(getProducts(), 1);
    expect(result).toEqual(expected);
  });
});

describe("filterProductsWithOperatorAny", () => {
  it("should return a list with products where Description is defined/is not null", () => {
    const expected = [
      {
        id: 0,
        property_values: [
          {
            property_id: 0,
            value: "Headphones",
          },
          {
            property_id: 1,
            value: "black",
          },
          {
            property_id: 2,
            value: 5,
          },
          {
            property_id: 3,
            value: "electronics",
          },
          {
            property_id: 4,
            value: "false",
          },
        ],
      },
      {
        id: 1,
        property_values: [
          {
            property_id: 0,
            value: "Cell Phone",
          },
          {
            property_id: 1,
            value: "black",
          },
          {
            property_id: 2,
            value: 3,
          },
          {
            property_id: 3,
            value: "electronics",
          },
          {
            property_id: 4,
            value: "true",
          },
        ],
      },
      {
        id: 2,
        property_values: [
          {
            property_id: 0,
            value: "Keyboard",
          },
          {
            property_id: 1,
            value: "grey",
          },
          {
            property_id: 2,
            value: 5,
          },
          {
            property_id: 3,
            value: "electronics",
          },
          {
            property_id: 4,
            value: "false",
          },
        ],
      },
    ];
    const result = filterProductsWithOperatorAny(getProducts(), 4);
    expect(result).toEqual(expected);
  });
});

describe("filterProductsWithOperatorNone", () => {
  it("should return a list with products where Description is not defined/is null", () => {
    const expected = [
      {
        id: 3,
        property_values: [
          {
            property_id: 0,
            value: "Cup",
          },
          {
            property_id: 1,
            value: "white",
          },
          {
            property_id: 2,
            value: 3,
          },
          {
            property_id: 3,
            value: "kitchenware",
          },
        ],
      },
      {
        id: 4,
        property_values: [
          {
            property_id: 0,
            value: "Key",
          },
          {
            property_id: 1,
            value: "silver",
          },
          {
            property_id: 2,
            value: 1,
          },
          {
            property_id: 3,
            value: "tools",
          },
        ],
      },
      {
        id: 5,
        property_values: [
          {
            property_id: 0,
            value: "Hammer",
          },
          {
            property_id: 1,
            value: "brown",
          },
          {
            property_id: 2,
            value: 19,
          },
          {
            property_id: 3,
            value: "tools",
          },
        ],
      },
    ];
    const result = filterProductsWithOperatorNone(getProducts(), 4);
    expect(result).toEqual(expected);
  });
});

describe("filterProductsWithOperatorIn", () => {
  it("should return a list with products where the given values fully match the value property inside property_values", () => {
    const expected = [
      {
        id: 0,
        property_values: [
          {
            property_id: 0,
            value: "Headphones",
          },
          {
            property_id: 1,
            value: "black",
          },
          {
            property_id: 2,
            value: 5,
          },
          {
            property_id: 3,
            value: "electronics",
          },
          {
            property_id: 4,
            value: "false",
          },
        ],
      },
      {
        id: 4,
        property_values: [
          {
            property_id: 0,
            value: "Key",
          },
          {
            property_id: 1,
            value: "silver",
          },
          {
            property_id: 2,
            value: 1,
          },
          {
            property_id: 3,
            value: "tools",
          },
        ],
      },
    ];
    const result = filterProductsWithOperatorIn(
      getProducts(),
      "Headphones, Key"
    );
    expect(result).toEqual(expected);
  });

  it("should return an empty list if the given value property doesn't exist at the list of property_values", () => {
    const expected: Product[] = [];
    const result = filterProductsWithOperatorIn(getProducts(), "foo");
    expect(result).toEqual(expected);
  });
});

describe("filterProductsWithOperatorContains", () => {
  it("should return a list with products where the given value exists for the given property id", () => {
    const expected = [
      {
        id: 0,
        property_values: [
          {
            property_id: 0,
            value: "Headphones",
          },
          {
            property_id: 1,
            value: "black",
          },
          {
            property_id: 2,
            value: 5,
          },
          {
            property_id: 3,
            value: "electronics",
          },
          {
            property_id: 4,
            value: "false",
          },
        ],
      },
      {
        id: 1,
        property_values: [
          {
            property_id: 0,
            value: "Cell Phone",
          },
          {
            property_id: 1,
            value: "black",
          },
          {
            property_id: 2,
            value: 3,
          },
          {
            property_id: 3,
            value: "electronics",
          },
          {
            property_id: 4,
            value: "true",
          },
        ],
      },
    ];
    const result = filterProductsWithOperatorContains(
      getProducts(),
      0,
      "phone"
    );
    expect(result).toEqual(expected);
  });

  it("should return an empty list when the given value doesn't exist for the given property id at the list of products", () => {
    const expected: Product[] = [];
    const result = filterProductsWithOperatorContains(getProducts(), 0, "foo");
    expect(result).toEqual(expected);
  });
});

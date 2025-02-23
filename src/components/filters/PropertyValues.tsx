"use client";
import { ChangeEvent } from "react";
import PropertyValueText from "./PropertyValueText";
import PropertyValuesMultipleSelector from "./PropertyValuesMultipleSelect";
import { getPropertyValues } from "@/services/propertyValues";

interface Props {
  filters: {
    propertyName: string;
    operator: string;
    propertyValue: string;
  };
  onChangePropertyValue: (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    options?: string
  ) => void;
}

const PropertyValues = ({ filters, onChangePropertyValue }: Props) => {
  const { propertyName, operator, propertyValue } = filters;

  if (!operator) {
    return null;
  }

  const property = getPropertyValues(propertyName);

  if (!property || ["any", "none"].includes(operator)) {
    return null;
  }

  if (property.type === "number" || property.type === "string") {
    return (
      <PropertyValueText
        propertyValue={propertyValue}
        onChangePropertyValue={onChangePropertyValue}
      />
    );
  }

  if (property.type === "enumerated") {
    return (
      <PropertyValuesMultipleSelector
        values={property.values ?? []}
        onChangePropertyValue={onChangePropertyValue}
      />
    );
  }

  return null;
};

export default PropertyValues;

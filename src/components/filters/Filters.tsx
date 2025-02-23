"use client";
import Operators from "./Operators";
import PropertyNames from "./PropertyNames";
import { ChangeEvent } from "react";
import PropertyValues from "./PropertyValues";

type Props = {
  filters: {
    propertyName: string;
    operator: string;
    propertyValue: string;
  };
  onPropertyNameUpdate: (value: string) => void;
  onOperatorUpdate: (value: string) => void;
  onPropertyValueUpdate: (value: string) => void;
  onClearClick: () => void;
};

const Filters = ({
  filters,
  onPropertyNameUpdate,
  onOperatorUpdate,
  onPropertyValueUpdate,
  onClearClick,
}: Props) => {
  const handlePropertyNameChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onPropertyNameUpdate(e.target.value);
    onOperatorUpdate("");
  };

  const handleOperatorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onOperatorUpdate(e.target.value);
    onPropertyValueUpdate("");
  };

  const handlePropertyValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    options?: string
  ) => {
    onPropertyValueUpdate(!options ? e.target.value : options);
  };

  const handleClearClick = () => {
    onClearClick();
  };

  return (
    <div className="flex w-full justify-between items-start">
      <div className="flex gap-4 items-start w-1/2">
        <PropertyNames
          propertyId={filters.propertyName}
          onPropertyNameChange={handlePropertyNameChange}
        />
        <Operators
          propertyId={filters.propertyName}
          operator={filters.operator}
          onOperatorChange={handleOperatorChange}
        />
        <PropertyValues
          filters={filters}
          onChangePropertyValue={handlePropertyValueChange}
        />
      </div>

      <button
        className="text-white bg-gray-800 border border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2"
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  );
};

export default Filters;

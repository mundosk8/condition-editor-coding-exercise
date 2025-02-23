import { ChangeEvent } from "react";

interface Props {
  propertyValue: string;
  onChangePropertyValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PropertyValueText = ({ propertyValue, onChangePropertyValue }: Props) => {
  return (
    <input
      id="property-value-text"
      type="text"
      onChange={onChangePropertyValue}
      value={propertyValue}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    />
  );
};

export default PropertyValueText;

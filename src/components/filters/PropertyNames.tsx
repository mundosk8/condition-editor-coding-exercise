"use client";
import { getProperties, Property } from "@/datastore";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  propertyId: string;
  onPropertyNameChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const PropertyNames = ({ propertyId, onPropertyNameChange }: Props) => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = () => {
      const response = getProperties();

      setProperties(() => response);
    };

    fetchProperties();
  }, []);

  const handleSelectProperty = (e: ChangeEvent<HTMLSelectElement>) => {
    onPropertyNameChange(e);
  };

  return (
    <select
      name="property-names"
      onChange={handleSelectProperty}
      value={propertyId}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-r-8 border-transparent"
    >
      <option disabled value="">
        Select a property...
      </option>
      {properties.map((property) => {
        return (
          <option key={`property-${property.id}`} value={property.id}>
            {property.name}
          </option>
        );
      })}
    </select>
  );
};

export default PropertyNames;

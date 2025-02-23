"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Operator } from "@/datastore";
import { getOperators } from "@/services/operators";

interface Props {
  propertyId: string;
  operator: string;
  onOperatorChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Operators = ({ propertyId, operator, onOperatorChange }: Props) => {
  const [operators, setOperators] = useState<Operator[]>([]);

  useEffect(() => {
    const fetchOperators = () => {
      const fetchOperators = getOperators(propertyId);

      setOperators(() => fetchOperators);
    };

    if (propertyId) {
      fetchOperators();
    }
  }, [propertyId]);

  return (
    <select
      name="operators"
      onChange={onOperatorChange}
      value={operator}
      disabled={!propertyId}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-r-8 border-transparent"
    >
      <option disabled value="">
        Select an operator...
      </option>
      {operators.map((operator) => {
        return (
          <option key={`operator-${operator.id}`} value={operator.id}>
            {operator.text}
          </option>
        );
      })}
    </select>
  );
};

export default Operators;

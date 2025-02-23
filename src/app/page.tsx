"use client";

import Filters from "@/components/filters/Filters";
import ProductsTable from "@/components/table/ProductsTable";
import useFilter from "@/hooks/useFilter";

export default function Home() {
  const {
    filters,
    updatePropertyName,
    updateOperator,
    updatePropertyValue,
    resetFilters,
  } = useFilter();

  return (
    <main className="flex flex-col justify-between items-center p-24">
      <Filters
        filters={filters}
        onPropertyNameUpdate={updatePropertyName}
        onOperatorUpdate={updateOperator}
        onPropertyValueUpdate={updatePropertyValue}
        onClearClick={resetFilters}
      />
      <ProductsTable filters={filters} />
    </main>
  );
}

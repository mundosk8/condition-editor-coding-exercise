import { getFilteredProducts } from "@/services/products";

interface Props {
  filters: {
    propertyName: number | string | null;
    operator: string | null;
    propertyValue: string | number | null;
  };
}

const ProductsTable = ({ filters }: Props) => {
  const { propertyName, operator, propertyValue } = filters;
  const { properties, products } = getFilteredProducts(
    propertyName,
    operator,
    propertyValue
  );

  return (
    <div className="w-full mt-12">
      <table
        id="products-table"
        className="table-auto w-full border-collapse border border-slate-800"
      >
        <thead className="bg-slate-800 text-white">
          <tr>
            {properties.map((property) => {
              return (
                <th
                  key={`th-property-${property.id}`}
                  className="px-4 py-2 text-left ps-8"
                >
                  {property.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr
                key={`table-tr-product-${product.id}`}
                className="hover:bg-slate-300"
              >
                {properties.map((property) => {
                  const pv = product.property_values.find(
                    (pv) => pv.property_id === property.id
                  );
                  return (
                    <td
                      key={`table-td-${property.id}`}
                      className="px-4 py-2 text-left ps-8"
                    >
                      {pv ? pv.value : ""}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;

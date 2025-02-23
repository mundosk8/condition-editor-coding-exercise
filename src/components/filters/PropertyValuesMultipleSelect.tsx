import { ChangeEvent } from "react";

interface Props {
  values: string[];
  onChangePropertyValue: (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    options: string
  ) => void;
}

const PropertyValuesMultipleSelector = ({
  values,
  onChangePropertyValue,
}: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const options: HTMLOptionElement[] = Array.from(event.target.options);
    const selected = options.filter((o) => o.selected).map((o) => o.value);

    onChangePropertyValue(event, selected.toString());
  };

  return (
    <select
      onChange={handleChange}
      multiple
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-r-8 border-transparent"
    >
      {values.map((v) => {
        return (
          <option key={`property-multiple-select-${v}`} value={v}>
            {v}
          </option>
        );
      })}
    </select>
  );
};

export default PropertyValuesMultipleSelector;

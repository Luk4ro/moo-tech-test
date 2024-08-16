import { SingleSelectProps } from "./types";

const SingleSelect = ({
  attributeOptions,
  onOptionClick,
  selectedOptions,
}: SingleSelectProps) => (
  <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
    {attributeOptions.map((option) => (
      <li key={option.value}>
        <input
          className={`hidden`}
          type="radio"
          id={option.value.toString()}
          name={option.type}
          value={option.value}
          onChange={() => onOptionClick(option.type, option.value.toString())}
          defaultChecked={selectedOptions[option.type] === option.value}
        />
        <label
          className={`block w-full rounded outline outline-2 text-xl ${
            selectedOptions[option.type] === option.value
              ? "outline-[#00CC99]"
              : "outline-[#A3A3A3]"
          } p-3 text-start cursor-pointer`}
          htmlFor={option.value.toString()}
        >
          {option.label}
        </label>
      </li>
    ))}
  </ul>
);

export default SingleSelect;

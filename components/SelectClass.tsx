import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
export const cabins = [
  {
    label: "Business",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Economy",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "First Class",
    value: "elephant",
    description: "The largest land animal",
  },
];

export default function SelectClass() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center  mt-4">
      <Select label="Class" className="max-w-xs">
        {cabins.map((cabin) => (
          <SelectItem key={cabin.value} value={cabin.value}>
            {cabin.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

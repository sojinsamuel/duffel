import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import SearchInput from "./search";
export const places = [
  {
    label: "France",
    value: "france",
    description: "A country known for its art, culture, and cuisine",
  },
  {
    label: "Tokyo",
    value: "tokyo",
    description:
      "The capital city of Japan, known for its modern architecture and vibrant street life",
  },
  {
    label: "Heathrow Airport",
    value: "heathrow",
    description:
      "One of the busiest airports in the world, located in London, UK",
  },
  {
    label: "Italy",
    value: "italy",
    description: "A country famous for its history, art, and food",
  },
  {
    label: "New York City",
    value: "nyc",
    description:
      "The largest city in the United States, known for its diverse culture and iconic skyline",
  },
  {
    label: "JFK International Airport",
    value: "jfk",
    description: "One of the primary airports serving New York City",
  },
  {
    label: "Australia",
    value: "australia",
    description:
      "A country known for its stunning landscapes, beaches, and unique wildlife",
  },
  {
    label: "Sydney",
    value: "sydney",
    description:
      "The largest city in Australia, famous for its iconic Opera House and Harbour Bridge",
  },
];

export default function Auto() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mx-auto justify-center items-center">
      <Autocomplete
        label="From"
        placeholder="Country, city or airport"
        className="max-w-xs"
        defaultItems={places}
        size="md"
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
      <Autocomplete
        label="To"
        placeholder="Country, city or airport"
        className="max-w-xs"
        defaultItems={places}
        size="md"
      >
        {(anotherItem) => (
          <AutocompleteItem key={anotherItem.value}>
            {anotherItem.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
      {/* <Autocomplete
        label="Depart"
        placeholder="Country, city or airport"
        className="max-w-xs w-[220px]"
        defaultItems={[{ label: "", value: "" }]}
        size="md"
        onClick={(e) => console.log(e)}
        value=""
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
      <Autocomplete
        label="Return"
        placeholder="Country, city or airport"
        className="max-w-xs w-[220px]"
        defaultItems={[{ label: "", value: "" }]}
        size="md"
        onClick={(e) => console.log(e)}
        value=""
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete> */}
      {/* <SearchInput label="Depart" /> */}
    </div>
  );
}

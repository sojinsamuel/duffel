import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import SearchInput from "./search";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

export default function Auto() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        label="From"
        placeholder="Country, city or airport"
        className="max-w-xs"
        defaultItems={animals}
        size="lg"
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
      <Autocomplete
        label="To"
        placeholder="Country, city or airport"
        className="max-w-xs"
        defaultItems={animals}
        size="lg"
      >
        {(anotherItem) => (
          <AutocompleteItem key={anotherItem.value}>
            {anotherItem.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
      <Autocomplete
        label="From"
        placeholder="Country, city or airport"
        className="max-w-xs"
        defaultItems={[{ label: "", value: "" }]}
        size="lg"
        onClick={(e) => <Calendar />}
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
      {/* <SearchInput label="Depart" /> */}
    </div>
  );
}

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { Button } from "@nextui-org/button";

export default function SelectorPath({
  btnName,
  items,
}: {
  btnName: string;
  items: string[];
}) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([btnName]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown size="lg">
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys as any}
      >
        {items.map((item) => {
          return <DropdownItem key={item}>{item}</DropdownItem>;
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

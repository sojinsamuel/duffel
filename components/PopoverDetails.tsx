import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { UserRound } from "lucide-react";

export default function PopoverDetails() {
  return (
    <Popover placement="bottom" showArrow offset={10} className="">
      <PopoverTrigger>
        <Button
          size="lg"
          startContent={<UserRound />}
          color="secondary"
          className="mb-2"
        >
          Passengers
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Travellers
            </p>
            <div className="mt-2 flex flex-col gap-2 w-full">
              <Input
                type="number"
                label="Adults"
                placeholder="2"
                labelPlacement="outside"
                // startContent={
                //   <div className="pointer-events-none flex items-center">
                //     <span className="text-default-400 text-small">$</span>
                //   </div>
                // }
              />

              <Input
                type="number"
                label="Children"
                placeholder="1"
                labelPlacement="outside"
                // startContent={
                //   <div className="pointer-events-none flex items-center">
                //     <span className="text-default-400 text-small">$</span>
                //   </div>
                // }
              />
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

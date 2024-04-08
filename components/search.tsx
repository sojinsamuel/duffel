"use client";

// import {
//   AtSymbolIcon,
//   CheckIcon,
//   MagnifyingGlassCircleIcon,
// } from "@heroicons/react/24/solid";
// import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useEffect, useMemo, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableColumn,
//   TableHeader,
//   TableRow,
//   Skeleton,
//   Badge,
//   Avatar,
// } from "@nextui-org/react";
// import Notification from "../onboarding/notification";
import { useRouter } from "next/navigation";

// const CongratsBadge = () => {
//   return (
//     <Badge
//       isOneChar
//       content={<CheckIcon />}
//       color="success"
//       placement="bottom-right"
//       size="md"
//     >
//       <Avatar
//         isBordered
//         color="success"
//         radius="md"
//         src="./party-face.webp"
//         className="object-contain"
//         size="sm"
//       />
//     </Badge>
//   );
// };

export default function SearchInput({ label }: { label: string }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [usernameStats, setUsernameStats] = useState<any>("");
  const [result, setResult] = useState(false);
  const router = useRouter();

  const validateUsername = (username: any) => username.match(/^[a-zA-Z0-9_]+$/);

  const isInvalid = useMemo(() => {
    if (username === "") return false;

    return !validateUsername(username);
  }, [username]);

  async function onSubmit() {
    try {
      setLoading(true);
      const res = await fetch("/api/check-availability", {
        method: "POST",
        body: JSON.stringify({
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUsernameStats(data);
      // console.log("====================================");
      // console.log(usernameStats);
      // console.log("====================================");
    } catch (error) {
    } finally {
      setLoading(false);
      setResult(true);
    }
  }

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
    setResult(false);
  };

  useEffect(() => {}, [result]);

  return (
    <div>
      <div className="relative flex">
        <Input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          value={username}
          onValueChange={handleUsernameChange}
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "primary"}
          errorMessage={
            isInvalid &&
            "Woah, username cannot include (@, spaces, hyphens, symbols)"
          }
          aria-label="Search"
          size="sm"
          variant="bordered"
          classNames={{
            inputWrapper:
              "bg-default-100 md:w-[18vw] w-[18vw] mx-auto h-[12vh]",
            input: "md:text-lg sm:text-md",
          }}
          labelPlacement="outside"
          placeholder="Country, city, or airport"
          label={label}
          // startContent={<AtSymbolIcon width={25} height={25} />}
          type="search"
        />
      </div>
    </div>
  );
}

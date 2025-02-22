"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export const FormLandingPage = () => {
  const [name, setName] = useState("");
  return (
    <div className="flex gap-2">
      <Input
        className="sm:w-96 w-52"
        placeholder="Your logo name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button>
        <Link href={`/create?name=${name}`}>Create</Link>
      </Button>
    </div>
  );
};

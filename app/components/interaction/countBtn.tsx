"use client";

//react
import { useState } from "react";

//MUI
import Button from "@mui/material/Button";

export default function CountBtn() {
  const [count, setCount] = useState<number>(0);

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}
    >
      Click me
    </Button>
  );
}

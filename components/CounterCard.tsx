"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";

export function CounterCard() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <Card className="w-full max-w-xs p-6">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-semibold">Counter</h2>
        <div className="flex items-center justify-between gap-4">
          <Button
            aria-label="Decrease count"
            color="primary"
            variant="flat"
            onClick={handleDecrement}
          >
            -
          </Button>
          <span className="text-3xl font-bold">{count}</span>
          <Button
            aria-label="Increase count"
            color="primary"
            variant="flat"
            onClick={handleIncrement}
          >
            +
          </Button>
        </div>
      </div>
    </Card>
  );
}

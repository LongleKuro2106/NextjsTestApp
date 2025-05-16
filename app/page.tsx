"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";

interface DynamicComponent {
  id: number;
  name: string;
}

export default function Home() {
  const [components, setComponents] = useState<DynamicComponent[]>([]);
  const [nextId, setNextId] = useState(1);
  const [count, setCount] = useState(0);

  const handleAddComponent = () => {
    setComponents([...components, { id: nextId, name: `Component ${nextId}` }]);
    setNextId(nextId + 1);
  };

  const handleRemoveComponent = (id: number) => {
    setComponents(components.filter((comp) => comp.id !== id));
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <main className="container mx-auto p-6">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-center">Component Manager</h1>

        {/* Counter Section */}
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

        <Button
          className="w-full max-w-xs"
          color="primary"
          onClick={handleAddComponent}
        >
          Add New Component
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {components.map((component) => (
            <Card key={component.id} className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{component.name}</h2>
                <Button
                  aria-label={`Remove ${component.name}`}
                  color="danger"
                  variant="light"
                  onClick={() => handleRemoveComponent(component.id)}
                >
                  Remove
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

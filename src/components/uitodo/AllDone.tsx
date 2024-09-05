// src/Header.tsx
import React from "react";

import { Button } from "@/components/ui/button";
import { useTodoStore } from "../../hooks/store";

const AllDone: React.FC = () => {
  const {markAllTodos} = useTodoStore();

  const handleMarkAll = () => {
    markAllTodos();
  };
  return (
    <Button onClick={handleMarkAll} variant="outline" className="bg-slate-600 text-white">
      Mark all as Done
    </Button>
  );
};

export default AllDone;

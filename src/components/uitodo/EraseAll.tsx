// src/Header.tsx
import React from "react";

import { Button } from "@/components/ui/button";
import { useTodoStore } from "../../hooks/store";

const EraseAll: React.FC = () => {
     const { clearTodos } = useTodoStore();

     const handleClear = () => {
       clearTodos();
     };
  return (
   
        <Button onClick={handleClear} variant="outline" className="bg-slate-600 text-white">
          Delete All
        </Button>
      
  );
};

export default EraseAll;

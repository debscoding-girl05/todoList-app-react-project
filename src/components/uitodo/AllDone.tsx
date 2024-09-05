// src/Header.tsx
import React from "react";

import { Button } from "@/components/ui/button";

const EraseAll: React.FC = () => {
  return (
    <Button variant="outline" className="bg-slate-600 text-white">
      Mark all as Done
    </Button>
  );
};

export default EraseAll;

// src/Header.tsx
import React from "react";
import { Button } from "@/components/ui/button";


import AddTask from "./AddTask";


const Header: React.FC = () => {
  return (
    <div className="bg-slate-500 p-2 rounded-md h-15 m-4">
      <header className="flex justify-between items-center p-4">
        <AddTask/>

        <Button variant="outline" className="bg-slate-600 text-white">EraseAll</Button>
        <Button variant="outline" className="bg-slate-600 text-white">All Done</Button>
      </header>
    </div>
  );
};

export default Header;

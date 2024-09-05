// src/Header.tsx
import React from "react";
import AllDone from "./AllDone";


import AddTask from "./AddTask";
import EraseAll from "./EraseAll";


const Header: React.FC = () => {
  return (
    <div className="bg-slate-500 p-2 rounded-md h-15 m-4">
      <header className="flex justify-between items-center p-4">
        <AddTask/>
       <EraseAll/>
        <AllDone/>
      </header>
    </div>
  );
};

export default Header;

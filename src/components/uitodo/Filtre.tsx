// src/Header.tsx
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const Filtre: React.FC = () => {
  return (
    <div className="flex justify-end items-center gap-2 mt-5 mr-4 ">
        <label htmlFor="filter" className="text-sm font-medium ">Filter</label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Choose a state" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>State</SelectLabel>
            <SelectItem value="notDone">Not Done</SelectItem>
            <SelectItem value="done"> Done</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filtre;

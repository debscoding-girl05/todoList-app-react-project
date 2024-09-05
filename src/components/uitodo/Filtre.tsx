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
import { useTodoStore } from "@/hooks/store";



const Filtre: React.FC = () => {
  const {filter,setFilter}=useTodoStore();
  return (
    <div className="flex justify-end items-center gap-2 mt-5 mr-4 ">
      <label htmlFor="filter" className="text-sm  text-black font-semibold">
        Filter
      </label>
      <Select 
      value={filter}
      onValueChange={(value)=>setFilter(value as 'all' | 'done' | 'notDone')}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Choose a filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>State</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="notDone">Not Done</SelectItem>
            <SelectItem value="done"> Done</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filtre;

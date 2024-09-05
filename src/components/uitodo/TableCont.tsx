// src/Header.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditTask from "./EditTask";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteTask from "./DeleteTask";
import { useTodoStore } from "@/hooks/store";




const TableCont: React.FC = () => {
    

    const {todos,toggleTodo,deleteTodo,setFilter,filter}=useTodoStore();

    const filteredTodos=todos.filter((todo)=>{
      if (filter === 'all') return true;
      if(filter === 'done') return todo.isDone;
      if(filter === 'notDone') return !todo.isDone;
      return true;
    });

  return (
    <div className="flex justify-end items-center gap-2 mt-5 mr-4 ">
      {filteredTodos.length === 0 ?(
        <p className="text-lg font-semibold text-gray-500">No tasks yet.</p>
      ) : (
      <Table>
        <TableCaption>A list of your Tasks.</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="w-[25px] text-center text-slate-500 font-semibold">
              ID
            </TableHead>
            <TableHead className="w-[200px] text-center text-slate-500 font-semibold">
              Name
            </TableHead>
            <TableHead className="ml-55 w-[225px] text-center text-slate-500 font-semibold">
              Description
            </TableHead>
            <TableHead className="ml-55 text-center w-[150px] text-slate-500 font-semibold">
              Status
            </TableHead>
            <TableHead className="text-center w-[100px] ml-75 text-slate-500 font-semibold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTodos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium text-black">
                {todo.id}
              </TableCell>
              <TableCell className="text-black font-medium">
                {todo.name}
              </TableCell>
              <TableCell className="text-black font-medium">
                {todo.description}
              </TableCell>
              <TableCell>
                <Badge
                  className={`${
                    todo.isDone ? "bg-green-500" : "bg-red-500"
                  } text-white text-center`}
                >
                  {todo.isDone ? "Done" : "Not Done"}
                </Badge>
              </TableCell>
              <TableCell className="text-right flex gap-8">
                <Checkbox
                  id="terms"
                  className="cursor-pointer border-2 border-slate-500  size-4 mt-1"
                  checked={todo.isDone}
                  onCheckedChange={() => {
                    toggleTodo(todo.id);
                  }}
                />
                <EditTask taskId={todo.id} />
                <DeleteTask taskId={todo.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    )}
    </div>  
  );
};

export default TableCont;





  


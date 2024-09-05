// src/Header.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Formul } from "./Formul";
import { SquarePen } from "lucide-react";
import { useTodoStore } from "@/hooks/store";
import { useState } from "react";


interface EditTaskProps{
    taskId:number;
}

const EditTask: React.FC<EditTaskProps> = ({taskId}) => {
   const {todos, updateTodo}=useTodoStore();
   const taskToEdit=todos.find((todo)=>todo.id===taskId);

   const [isOpen, setIsOpen]=useState(false);
   if(!taskToEdit) return null;

   const handleUpdateTodo=(name:string,description:string)=>{
    updateTodo(taskId, name, description);
    setIsOpen(false);
   };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <SquarePen size={20} color="green" className="cursor-pointer mt-0.48" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Modify name and description of task.
            </DialogDescription>
          </DialogHeader>
          <Formul
            initialData={{
              name: taskToEdit.name,
              description: taskToEdit.description,
            }}
            onSubmit={handleUpdateTodo}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditTask;

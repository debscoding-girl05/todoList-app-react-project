// src/Header.tsx
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {Formul} from "./Formul";
import { useTodoStore } from "@/hooks/store";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AddTask: React.FC = () => {
  const addTodo=useTodoStore((state)=>state.addTodo);
  const { toast } = useToast();
  const [isOpen, setIsOpen]=useState(false);
  const todos=useTodoStore((state)=>state.todos);

  const handleAddTodo=(name:string,description:string)=>{
    
    const taskExists= todos.some((todo)=> todo.name === name);
    if(taskExists){
      toast({
        title: "Task Exists!!!",
        description: "Your task already exists",
      });
      return;
    }else{
      addTodo(name,description);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-slate-600 text-white">
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Add name and description of task to be done.
          </DialogDescription>
        </DialogHeader>
        <Formul onSubmit={handleAddTodo} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;

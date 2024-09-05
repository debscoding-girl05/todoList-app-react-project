// src/Header.tsx
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {Formul} from "./Formul";


const AddTask: React.FC = () => {


  return (
     <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-slate-600 text-white">Add Task</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
              <DialogDescription>
                Add name and description of task to be done.
              </DialogDescription>
            </DialogHeader>
             <Formul/>
          </DialogContent>
        </Dialog>

  );
};

export default AddTask;

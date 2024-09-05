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

const EditTask: React.FC = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <SquarePen size={20} color="green" className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Modify name and description of task.
            </DialogDescription>
          </DialogHeader>
          <Formul />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditTask;

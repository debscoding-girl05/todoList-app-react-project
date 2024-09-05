// src/Header.tsx
import React from "react";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const DeleteTask: React.FC = () => {

    const { toast } = useToast();

  return (
    <div>
      <Trash2
        size={20}
        color="crimson"
        className="cursor-pointer hover:text-red-400"
        onClick={() => {
          toast({
            title: "Task deleted",
            description: "Your task has been deleted",
            
          });
        }}
      />
    </div>
  );
};

export default DeleteTask;

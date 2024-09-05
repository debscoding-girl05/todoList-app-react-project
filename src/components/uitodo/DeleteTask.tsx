// src/Header.tsx
import React from "react";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTodoStore } from "@/hooks/store";

interface DeleteTaskProps{
    taskId:number;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({taskId}) => {

     const { toast } = useToast();
    const deleteTodo=useTodoStore((state)=>state.deleteTodo);

    const handleDeleteTodo=()=>{
        deleteTodo(taskId);
        toast({
            title: "Task deleted",
            description: "Your task has been deleted",
          });
    };
   

  return (
    <div>
      <Trash2
        size={20}
        color="crimson"
        className="cursor-pointer hover:text-red-500 mt-0.48"
        onClick={handleDeleteTodo}
      />
    </div>
  );
};

export default DeleteTask;

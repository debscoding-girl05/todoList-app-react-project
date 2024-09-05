import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";

interface Todo{
    id:number,
    name:string,
    description:string,
    isDone:boolean;
}

interface TodoStore{
    todos: Todo[];
    filter: 'all' | 'done' | 'notDone';
    addTodo: (name: string, description:string) => void;
    updateTodo: (id:number,name:string,description:string) => void;
    toggleTodo: (id:number) => void;
    deleteTodo: (id:number) => void;
    setFilter: (filter:'all' | 'done' | 'notDone') => void;
}

export const useTodoStore = create(persist<TodoStore>(
    (set,get)=>({           
    todos:[],
    filter:'all',
    addTodo: (name: string, description:string) => {
        set((state)=>({
            todos: [...state.todos, {
                id:Date.now(),
                name,description,isDone:false
            }]
        }))
    },
    updateTodo: (id:number,name:string,description:string) => {
        set((state)=>({
            todos: state.todos.map((todo)=>todo.id === id ? {...todo,name,description}:todo)
        }))
    },
    toggleTodo: (id:number) => {
        set((state)=>({
            todos: state.todos.map((todo)=>todo.id === id ? {...todo,isDone:!todo.isDone}:todo)
        }))
    }, 
    deleteTodo: (id:number) => {
        set((state)=>({
            todos: state.todos.filter((todo)=>todo.id !== id)
        }))
    },
      setFilter:(filter)=> set({filter}),
      
}),
{
    name:'todo-storage',
    storage:createJSONStorage(()=>localStorage)
}
));


import './App.css'
import Header from './components/uitodo/Header'
import Filtre from './components/uitodo/Filtre'
import TableCont from './components/uitodo/TableCont'
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { ThemeProvider } from "./components/uitodo/Themeprovider";
import { useTheme } from "@/components/uitodo/Themeprovider";

import React from 'react';

const handleThemeChange = (value: boolean) => {
  const { setTheme, theme } = useTheme();
  setTheme(value ? "dark" : "light");
  console.log(theme);
};

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-15">Todo List</h1>
          <div className="flex items-center gap-2">
            <Moon size={22} color="black" className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'/>
            <Sun size={22} color="yellow" className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0'/>
            <Switch onCheckedChange={handleThemeChange} />
          </div>
        </div>

        <Header />
        <Filtre />
        <TableCont />
      </>
    </ThemeProvider>
  );
};

export default App

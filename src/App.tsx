import "./App.css";
import Header from "./components/uitodo/Header";
import Filtre from "./components/uitodo/Filtre";
import TableCont from "./components/uitodo/TableCont";

import { ThemeProvider } from "./components/uitodo/Themeprovider";
import { Toaster } from "./components/ui/toaster";

import React from "react";
import { SwitchThemeBtn } from "./components/uitodo/SwitchThemeBtn";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-15">Todo List</h1>
        <SwitchThemeBtn />
      </div>
      <Toaster />
      <Header />
      <Filtre />
      <TableCont />
    </ThemeProvider>
  );
};

export default App;

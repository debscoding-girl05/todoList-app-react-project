import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export const SwitchThemeBtn = () => {
  const {setTheme} = useTheme();

  const handleThemeChange = (value: boolean) => {
    setTheme(value ? "dark" : "light");
    console.log("theme");
  };
  return (
    <div className="flex items-center gap-2">
      <Moon
        size={22}
        color="black"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <Sun
        size={22}
        color="yellow"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"
      />
      <Switch onCheckedChange={handleThemeChange} />
    </div>
  );
};

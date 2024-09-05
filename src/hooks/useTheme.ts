import { useContext } from "react";
import { ThemeProviderContext } from "../components/uitodo/Themeprovider";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeProviderContext);
  console.log(theme);
  return {
    theme,
    setTheme,
  };
};

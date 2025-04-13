import { createContext, useState, useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const colorScheme = useColorScheme();

  useEffect(() => {
    colorScheme === "dark" ? setTheme(Colors.dark) : setTheme(Colors.light);
  }, [colorScheme]);

  return (
    <themeContext.Provider value={{ theme, colorScheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext, ThemeProvider };

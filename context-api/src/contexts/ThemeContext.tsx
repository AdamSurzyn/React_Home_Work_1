import { createContext, useState } from "react";

type ThemeContextProps = {
  theme: boolean;
  toggleTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {" "}
      //przekazujemy wartości do providera
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    // poza komponentem zwróci nulla i wyrzuci błąd
    throw new Error("Missing themeContext, it's not wrapped in ThemeProvider");
  }
  return ctx;
};

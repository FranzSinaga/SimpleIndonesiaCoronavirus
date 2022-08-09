import React, { useState, useEffect, createContext } from "react";

export const themes = {
  dark: '',
  light: 'white-content'
}

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {}
});



export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        document.getElementById('table-covid').classList.remove('table-dark')
        document.getElementById('theme-change').classList.remove('btn-outline-dark')
        document.getElementById('theme-change').classList.add('btn-outline-light')
        break;
      case themes.dark:
      default:
        document.getElementById('table-covid').classList.add('table-dark')
        document.getElementById('theme-change').classList.remove('btn-outline-light')
        document.getElementById('theme-change').classList.add('btn-outline-dark')
        
        document.body.classList.remove('white-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
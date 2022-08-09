import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeContext, themes } from './ThemeContextWrapper';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              color="link"
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            >
              {/* <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i> */}
              button
              <span className="d-lg-none d-md-block">Switch mode</span>
            </button>
          )}
        </ThemeContext.Consumer>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

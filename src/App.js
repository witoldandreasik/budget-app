import React from "react";
import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import theme from "utils/theme";

import { Navigation } from "components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div class="App">
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;

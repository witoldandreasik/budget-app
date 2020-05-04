import React from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./index.css";
import theme from "utils/theme";

import { useTranslation } from "react-i18next";

import { Navigation, Wrapper } from "components";

function App() {
  const { i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <Navigation
          items={[
            { content: "Homepage", to: "/" },
            {
              content: "budget",
              to: "/budget",
            },
          ]}
          RightElement={
            <div>
              <button onClick={() => i18n.changeLanguage("pl")}>PL</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">Budget page</Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

function RootApp() {
  return (
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  );
}

export default RootApp;

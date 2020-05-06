import React, { Fragment } from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./index.css";
import theme from "utils/theme";

import { useTranslation } from "react-i18next";

import { Navigation, Wrapper, LoadingIndicator, Button } from "components";

function App() {
  const { i18n } = useTranslation();
  return (
    <Fragment>
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
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("pl")}
              >
                PL
              </Button>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </Button>
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
    </Fragment>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;

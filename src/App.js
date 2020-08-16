import React from "react";
import Homepage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/default-theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainScreen>
        <Router>
          <Route exact path="/" component={Homepage}></Route>
          <Route
            exact
            path="/basic-calculator"
            component={CalculatorPage}
          ></Route>
        </Router>
      </MainScreen>
    </ThemeProvider>
  );
};

const MainScreen = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default App;

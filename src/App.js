import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/default-theme";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainScreen>
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
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
        </Container>
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

const Container = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
`;

export default App;

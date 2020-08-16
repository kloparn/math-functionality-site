import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";

const HomePage = () => {
  document.title = "HomePage";

  return (
    <div>
      <Container>
        <h1> Mathematical Home page</h1>
        <h2> Select a function</h2>
        <CustomLink
          to="/basic-calculator"
          onClick={() => (document.title = "Basic Calculations")}
        >
          <CustomButton>Calculator</CustomButton>
        </CustomLink>
        <CustomLink
          to="/polynom-calculator"
          onClick={() => (document.title = "Polynomical Calculations")}
        >
          <CustomButton>Polynom Problems</CustomButton>
        </CustomLink>
      </Container>
    </div>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const CustomLink = styled(Link)`
  margin-top: 1rem;
`;

const CustomButton = styled.button`
  font-size: 1.5rem;
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.secondary};
  text-shadow: 2px 2px ${(props) => props.theme.colors.shadowColor};
  transition: all 0.25s linear;

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export default HomePage;

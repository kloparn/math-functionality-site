import React, { useState } from "react";
import styled from "styled-components";
import Popup from "react-popup";

const CalculatorPage = () => {
  const [calculation, setCalculation] = useState("");
  const [wantAnswer, setWantAnswer] = useState(false);

  function isLetter(ch) {
    return isLowerCase(ch) || isUppercase(ch);
  }

  function isLowerCase(ch) {
    return ch.length === 1 && ch >= "a" && ch <= "ö";
  }

  function isUppercase(ch) {
    return ch.length === 1 && ch >= "A" && ch <= "Ö";
  }

  return (
    <Layout>
      <CalculationInput
        type="text"
        onChange={(e) => {
          e.target.value.length > 0
            ? isLetter(e.target.value[e.target.value.length - 1])
              ? (e.target.value = e.target.value.substring(
                  0,
                  e.target.value.length - 1
                ))
              : setWantAnswer(false)
            : setWantAnswer(false);
          setCalculation(e.target.value);
          setWantAnswer(false);
        }}
      ></CalculationInput>
      <CalculateButton
        onClick={() => {
          calculation.length > 0
            ? setWantAnswer(true)
            : Popup.alert("Please give me a calculation before you press me");
        }}
      >
        Calculate
      </CalculateButton>
      <ResultsSection>
        {/* eslint-disable-next-line no-eval */}
        {wantAnswer ? <div>Answer: {eval(calculation)}</div> : ""}
      </ResultsSection>
    </Layout>
  );
};

const ResultsSection = styled.section`
  color: white;
`;

const CalculateButton = styled.button`
  font-size: 3rem;
  background-color: grey;
  transition: all 0.2s linear;
  :focus {
    outline: none;
  }
  :active {
    outline: none;
    background: lightblue;
  }
`;

const CalculationInput = styled.input`
  font-size: 2rem;
  color: black;
  margin: 2rem;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default CalculatorPage;

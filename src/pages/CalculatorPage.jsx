import React, {
  useState
} from "react";
import styled from "styled-components";

const CalculatorPage = () => {
  const [calculation, setCalculation] = useState("");

  function isLetter(ch) {
    return isLowerCase(ch) || isUppercase(ch);
  }

  function isLowerCase(ch) {
    return ch.length === 1 && ch >= "a" && ch <= "ö";
  }

  function isUppercase(ch) {
    return ch.length === 1 && ch >= "A" && ch <= "Ö";
  }

  return ( <
    layout >
    <
    CalculationInput type = "text"
    onChange = {
      (e) => {
        e.target.value.length > 0 ?
          isLetter(e.target.value[e.target.value.length - 1]) ?
          (e.target.value = e.target.value.substring(
            0,
            e.target.value.length - 1
          )) :
          (e.target.value = e.target.value) :
          (e.target.value = e.target.value);
        setCalculation(e.target.value);
      }
    } >
    < /CalculationInput> <
    /layout>
  );
};

const CalculationInput = styled.input `
  font-size: 2rem;
  color: black;
`;

const layout = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CalculatorPage;
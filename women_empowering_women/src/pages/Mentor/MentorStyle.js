import styled from "styled-components";
import { Form, ErrorMessage, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 80px;
  background-color: #314455;
  color: white;

  .errors{
    width: 100%;
    display: flex;
    justify-content: center;
    height: 1rem; 
    margin-bottom: 0.4rem;
      div {
        margin-right: 2rem;
      }
  }
  h1 {
    font-size: 1.3rem;
    text-align: center;
    margin: 0.5rem;
  }
  input {
    font-size: 1.2rem;
    @media (max-width: 600px) {
      margin-bottom: 1rem;
    }

    :focus{
      outline: 1px solid #ff6347;
    }
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  padding: 0.5rem 0;
  font-size: 1rem;
`;


export const StyledDetails = styled(Field)`
  width: 8-%;
  margin-bottom: 20px;
  height: 60px;
  padding: 20px;
  border-radius: 3px;
  border: 1px solid rgba(233, 238, 243, 1);

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const Button = styled.button`
  margin: 6px auto;
  background-color: #C96467;
  color: rgba(255,255,255, 1);
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  padding: 0.6rem 5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.1s ease-in-out;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 0px;
  }
  h1 {
      font-size: 40px;
  }
  h2 {
      font-size: 30px;
      font-weight: 300;
      text-align: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  margin-top: 0px;
  flex-wrap: wrap;
  }
`;

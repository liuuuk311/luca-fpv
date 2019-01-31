import styled from 'styled-components';
import { navy, white, sky, black, gray } from '../../utils/colors';
import { mediumBp } from '../../utils/variables';
import { darken } from 'polished';

export const ContactContainer = styled.div`
  background-color: ${sky};
  padding: 50px 20px;
`;

export const ContactFormContainer = styled.div`
  margin: 0 auto;
  width: 100%;

  @media(min-width: ${mediumBp}){
    max-width: 400px;
  }
`;

export const ContactTitle = styled.h2`
  color: ${white};
  font-size: 36px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContactLabel = styled.label`
  color: ${black};
  display: block;
  transform: translateY(30px) translateX(10px);
`;

export const ContactInput = styled.input`
  background-color: ${white};
  border: none;
  border-radius: 0;
  color: ${black};
  font-size: 16px;
  padding: 35px 20px 20px 10px;
  transition: background-color ease-in-out 0.2s;
  width: 100%; 
  -webkit-appearance: none;

  &:hover, &:focus {
    background-color: ${gray};
    outline: none;
  }
`;

export const ContactTextArea = styled.textarea`
  background-color: ${white};
  border: none;
  border-radius: 0;
  color: ${black};
  font-size: 16px;
  height: 200px;
  padding: 35px 20px 20px 10px;
  transition: background-color ease-in-out 0.2s;
  width: 100%; 
  -webkit-appearance: none;

  &:hover, &:focus {
    background-color: ${gray};
    outline: none;
  }
`;

export const ContactButton = styled.button`
  background-color: ${navy};
  border: none;
  color: ${white};
  cursor: pointer;
  display: block;
  font-size: 18px;
  margin: 15px auto 0 auto;
  padding: 18px 0;
  transition: background-color ease-in-out 0.2s;
  width: 100%;

  &:hover, &:hover {
    background-color: ${darken(0.1, navy)};
    text-decoration: none;
    outline: none;
  }
`;

import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export const Section = styled.section`
  width: max-content;
  margin: 100px auto 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #23323D;
  padding: 30px;
  margin-top: ;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Field = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  ${props => props.error ? 'border: 1px solid red' : ''}
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: .1em;
  color: #ffffff;
  background-color: ${props => props.backgroundColor ? `${props.backgroundColor}` : '#19AF86' };
  border: none;
  cursor: pointer;
  outline: none;
  transition: background .3s ease;
  ${props => props.marginRight ? `margin-right: ${props.marginRight}px` : ''};
  
  &:hover {
    background: #148C6B;
  }
`;

export const FieldWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  max-width: 500px;
  ${props => props.marginRight ? `margin-right: ${props.marginRight}px` : ''};
`;

export const Error = styled.span`
  width: 100%;
  display: inline-block;
  margin-top: 10px;
  color: red;
  text-align: center;
  max-width: 500px;
`;

export const ButtonWrap = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const TextButton = styled.p`
  color: #19AF86;
  margin-bottom: 10px;
  width: 100%;
  text-align: right;
  font-weight: bold;
  cursor: pointer;
`;

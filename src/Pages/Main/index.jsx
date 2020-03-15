import React, { useState } from 'react';
import SignForm from 'Components/SignForm';
import LogInForm from 'Components/LogInForm';
import {
  Section,
  GlobalStyle,
  Button,
  ButtonWrap,
} from 'Styles';

export const Main = () => {
  const buttonColor = '#43515A';
  const SignIn = 'SignIn';
  const LogIn = 'LogIn';

  const [ formName, setShowLogIn ] = useState(SignIn);
  const showSignIn = formName === SignIn;
  const showLogIn = formName === LogIn;

  const togglForm = (event) => {
    const name = event.target.dataset.formName || SignIn;

    setShowLogIn(name);
  };
  
  return (
    <Section>
      <ButtonWrap>
        <Button
          data-form-name={SignIn}
          marginRight={15}
          onClick={togglForm}
          backgroundColor={!showSignIn && buttonColor}
        >
          Sign Up
        </Button>

        <Button
          data-form-name={LogIn}
          onClick={togglForm}
          backgroundColor={!showLogIn && buttonColor}
        >
          Log In
        </Button>
      </ButtonWrap>

      <GlobalStyle />

      {showLogIn && (
        <LogInForm />
      )}

      {showSignIn && (
        <SignForm />
      )}
    </Section>
  );
};

export default Main;

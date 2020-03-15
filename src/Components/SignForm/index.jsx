import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, ErrorMessage } from 'react-hook-form'
import { string, object } from 'yup';
import {
  loadCreatedUser,
} from 'Actions';
import {
  Form,
  Title,
  Wrapper,
  Field,
  Button,
  FieldWrap,
  Error,
} from 'Styles';

const Schema = object().shape({
  firstName: string().matches(/^[a-zA-Z]+$/).required(),
  LastName: string().matches(/^[a-zA-Z]+$/).required(),
  Password: string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/).required(),
  Email: string().email().required(),
});

export const SignForm = () => {
  const prevUserIdRef = useRef();
  const {
    id,
    created,
    isFetching,
  } = useSelector(({ id, created, isFetching }) => ({ id, created, isFetching }));
  
  if (created && id !== prevUserIdRef.current) {
    alert(`userId: ${id}`);
  }

  useEffect(() => {
    prevUserIdRef.current = id;
  });

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
  });
  const onSubmit = (data) => {
    dispatch(loadCreatedUser(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Sing Up For Free</Title>

      <Wrapper>
        <FieldWrap marginRight={15}>
          <Field
            name="firstName"
            placeholder="First Name"
            ref={register}
            error={errors.firstName}
          />

          <ErrorMessage errors={errors} name="firstName">
            {() => (
              <Error>
                please enter valid first name
              </Error>
            )}
          </ErrorMessage>
        </FieldWrap>

        <FieldWrap>
          <Field
            name="LastName"
            placeholder="Last Name"
            ref={register}
            error={errors.LastName}
          />

          <ErrorMessage errors={errors} name="LastName">
            {() => (
              <Error>
                please enter valid last name
              </Error>
            )}
          </ErrorMessage>
        </FieldWrap>
      </Wrapper>

      <FieldWrap>
        <Field
          name="Email"
          placeholder="Email Address"
          ref={register}
          error={errors.Email}
        />

        <ErrorMessage errors={errors} name="Email">
          {() => (
            <Error>
              please enter valid email
            </Error>
          )}
        </ErrorMessage>
      </FieldWrap>

      <FieldWrap>
        <Field
          name="Password"
          type="password"
          placeholder="Set A Password"
          ref={register}
          error={errors.Password}
        />

        <ErrorMessage errors={errors} name="Password">
          {() => (
            <Error>
              please enter valid password (example: nm%34Mldfa)
            </Error>
          )}
        </ErrorMessage>
      </FieldWrap>

      <Button type="submit">
        {isFetching ? 'Loading' : 'Get Started'}
      </Button>
    </Form>
  );
};

export default SignForm;

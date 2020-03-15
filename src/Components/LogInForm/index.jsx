import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, ErrorMessage } from 'react-hook-form'
import { string, object } from 'yup';
import {
  loadLogInUser,
} from 'Actions';
import {
  Form,
  Title,
  FieldWrap,
  Field,
  Button,
  Error,
} from 'Styles';

const Schema = object().shape({
  Password: string().required(),
  Email: string().email().required(),
});

export const LogInForm = () => {
  const prevUserIdRef = useRef();
  const {
    id,
    authorize,
    isFetching,
    token,
  } = useSelector(({ id, authorize, isFetching, token }) => ({ id, authorize, isFetching, token }));

  if (authorize && id !== prevUserIdRef.current) {
    alert(`Welcome back - userId: ${id}; userToken: ${token}`);
  }

  useEffect(() => {
    prevUserIdRef.current = id;
  });

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
  });
  const onSubmit = (data) => {
    dispatch(loadLogInUser(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Welcome back</Title>

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
          placeholder="Password"
          ref={register}
          error={errors.Password}
        />

        <ErrorMessage errors={errors} name="Password">
          {() => (
            <Error>
              please enter password
            </Error>
          )}
        </ErrorMessage>
      </FieldWrap>

      <Button type="submit">
        {isFetching ? 'Loading' : 'Log In' }
      </Button>
    </Form>
  );
};

export default LogInForm;

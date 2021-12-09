import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { StyledLoginForm } from './Styles';

const Login: React.FC = () => {
  const { handleSubmit } = useForm();

  const handleSubmitForm = async () => {};
  return (
    <StyledLoginForm onSubmit={handleSubmit(handleSubmitForm)}>
      LOgin
    </StyledLoginForm>
  );
};

export default Login;
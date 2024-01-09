import React from "react";
import CardWrapper from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headLabel="Bem-vindo de volta"
      backButtonLabel="Não tem uma conta?"
      backButtonHref="/auth/register"
      showSocial
    >
      a
    </CardWrapper>
  );
};

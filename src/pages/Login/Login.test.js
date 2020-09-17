import { render, fireEvent } from "@testing-library/react";
import React from 'react';
import Login from './Login';

it('Successful login when username and password are correct', () => {
  //renderizar o component login
  const { getByLabelText, getByText } = render(<Login />);
  //buscar o campo de username && preencher o campo de username
  fireEvent.change(getByLabelText("Usuário"), { target: { value: "teste" } });
  //buscar o campo de password && preencher o campo de password
  fireEvent.change(getByLabelText("Senha"), { target: { value: "teste" } });
  //buscar btn de login && clicar no btn de login
  fireEvent.click(getByText("Logar"));
  //checar msg de login com sucesso
  expect(getByText("Logado com sucesso")).toBeInTheDocument();
});
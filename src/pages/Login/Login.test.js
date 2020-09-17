import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Login from './Login';
import LoginClient from "../../api/login/loginClient";

describe('Successful Login', () => {
  it('When username and password are correct', () => {
    //render login component
    const { getByLabelText, getByText } = render(<Login />);

    //fill username field
    fireEvent.change(getByLabelText("Usuário"), { target: { value: "teste" } });

    //fill password field
    fireEvent.change(getByLabelText("Senha"), { target: { value: "teste" } });

    //submit login
    fireEvent.click(getByText("Logar"));

    //check the login result
    expect(getByText("Logado com sucesso")).toBeInTheDocument();
  });

  it('When username and password are correct simulating the API response', () => {
    //mocking API response
    jest.spyOn(LoginClient, "post").mockImplementationOnce(() => true);

    //render login component
    const { getByLabelText, getByText } = render(<Login />);

    //fill username field
    fireEvent.change(getByLabelText("Usuário"), {
      target: { value: "outroTeste" },
    });

    //fill password field
    fireEvent.change(getByLabelText("Senha"), {
      target: { value: "outroTeste" },
    });

    //submit login
    fireEvent.click(getByText("Logar"));

    //check the login result
    expect(getByText("Logado com sucesso")).toBeInTheDocument();
  });

});


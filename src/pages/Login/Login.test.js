import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Login from './Login';
import LoginClient from "../../api/login/loginClient";

describe('Successful Login', () => {

  it('When username and password are correct and using a real api', () => {
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

  it('When username and password are correct and using a fake api', () => {
    //mock API response to return Successful login
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

describe('Unsuccessful login', () => {

  it('When username is wrong and using a real api', () => {
    //render Login page
    const { getByLabelText, getByText } = render(<Login/>);

    //fill username field
    fireEvent.change(getByLabelText('Usuário'), { target: { value: 'wrongUsername' } });

    //fill password field
    fireEvent.change(getByLabelText('Senha'), { target: { value: 'teste' } });

    //submit login
    fireEvent.click(getByText('Logar'));

    //expect failure login message
    expect(getByText('Usuário ou senha incorreto')).toBeInTheDocument();
  });

  it('When password is wrong and using a real api', () => {
    //render Login page
    const { getByLabelText, getByText } = render(<Login/>);

    //fill username field
    fireEvent.change(getByLabelText('Usuário'), { target: { value: 'teste' } });

    //fill password field
    fireEvent.change(getByLabelText('Senha'), { target: { value: 'wrongPassword' } });

    //submit login
    fireEvent.click(getByText('Logar'));

    //expect failure login message
    expect(getByText('Usuário ou senha incorreto')).toBeInTheDocument();
  });

  it('When username or password is wrong and using a fake api', () => {
    //mock API response to return Unsuccessful login
    jest.spyOn(LoginClient, 'post').mockImplementationOnce(false);
    
    //render Login page
    const { getByLabelText, getByText } = render(<Login/>);

    //fill username field
    fireEvent.change(getByLabelText('Usuário'), { target: { value: 'teste' } });

    //fill password field
    fireEvent.change(getByLabelText('Senha'), { target: { value: 'teste' } });

    //submit login
    fireEvent.click(getByText('Logar'));

    //expect failure login message
    expect(getByText('Usuário ou senha incorreto')).toBeInTheDocument();
  });

});
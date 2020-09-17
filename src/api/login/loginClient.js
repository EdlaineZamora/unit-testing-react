const LoginClient = {

    post: (userName, password) => {
        console.log('Dados de login: ' + userName + ' ' + password);
        return (userName === 'teste' && password === 'teste');
    }

}

export default LoginClient;
import React, { useState, useEffect,useCallback } from 'react';

const FormAuth = () => {
    const [loadingServer, setLoadingServer] = useState(false);
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');
    const [messages, setMessages] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authorized, setAuthorized] = useState(false);

    //     const checkAuth = () = {
    // return 1;
    //     }


    function getServerInfo() {
        let data = {
            login: 'dev@dev.com',
            password: '123',
            token: 'asdasda32423sdasdasda',
            authorized: true,
        }
        data = JSON.stringify(data);
        return new Promise(function (resolve, reject) {

            setTimeout(() => {//имитируем задержку ответа
                resolve(data);
            }, 1000)

        });
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getServerInfo().then(
                response => {
                    const user = JSON.parse(response);
                    if (user.authorized && user.token === token) {
                        setAuthorized(true);
                    }
                }
            )
        }
    }, [])


    function login(e) {

        e.preventDefault();
        if (authorized) {
            setMessages('Вы уже авторизованы!');
            return;
        }
        setLoadingServer(true);

        getServerInfo().then(
            response => {
                setLoadingServer(false);
                const user = JSON.parse(response)

                if (user.login === email && user.password === password) {
                    localStorage.setItem('token', 'asdasda32423sdasdasda');
                    setMessages('Успех! Добро пожаловать!');
                } else {
                    setMessages('Ошибка! Неправильный логин или пароль!')
                }
            },
            error => { alert(`Rejected: ${error}`) }
        );


    }

    useEffect(() => {
        const message = setTimeout(() => {
            setMessages('');
        }, 2000)
        return () => message;
    }, [messages, setMessages])

    // useEffect(() => {
    //    // localStorage.setItem('token', '');
    // }, [messages, setMessages])

 
    const logout = () => {
        if (authorized) {
            setMessages('Выход выполнен');
            setAuthorized(false);
            localStorage.setItem('token', '');
        }
    }

    const setEmailHandler = (val) => {
        setEmail(val);
    }
    const setPasswordHandler = (val) => {
        setPassword(val);
    }

    return (
        <div>
            {messages && <div>{messages}</div>}
            {loadingServer && <div>Загрузка</div>}

            <form action="" onSubmit={(e) => login(e)}>
                <div className="formControl">
                    <div className="title">Выполнить вход</div>
                </div>
                <div className="formControl">
                    <input required type="email" placeholder={'Почта'} name={'email'} value={email}
                        onChange={(e) => setEmailHandler(e.target.value)} />
                </div>
                <div className="formControl">
                    <input required type="password" placeholder={'Пароль'} name={'pass'} value={password}
                        onChange={(e) => setPasswordHandler(e.target.value)} />
                </div>
                <div className="formControl">
                    <button type={'submit'}>Войти</button>
                </div>
                {authorized && <div className={'authorized'}>
                    <button onClick={logout} type={'button'}>Выйти</button>
                </div>}

            </form>

        </div>
    );
};

export default FormAuth;
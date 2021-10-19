import classnames from "classnames";
import React, {useState, useEffect} from 'react';
import {AuthForm} from "./molecules";
import {AuthMessages, Loader} from "./atoms";
import styles from './FormAuth.module.scss';

const FormAuth = () => {
    const [loadingServer, setLoadingServer] = useState(false);
    const [authorized, setAuthorized] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [alertMessage, setAlertMessage] = useState({
        success: true,
        text: ''
    });

    function getServerInfo() {
        let data = {
            name: 'username',
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

    const setToken = (token) => localStorage.setItem('token', token);

    const setUserAccountHandler = (name) => {
        setUserInfo({
            username: name
        })
    }

    const setAlertMessageHandler = (success = true, text = '') => {
        setAlertMessage({
            success,
            text,
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoadingServer(true);
            getServerInfo().then(
                response => {
                    const user = JSON.parse(response);
                    if (user.authorized && user.token === token) {
                        setAuthorized(true);
                        setUserAccountHandler(user.name)
                    }
                    setLoadingServer(false);
                }
            )
        }

    }, [setLoadingServer])


    function onLoginHandler(login, password) {
        if (authorized) {
            return setAlertMessageHandler(true, 'Вы уже авторизованы!');
        }
        setLoadingServer(true);

        getServerInfo().then(
            response => {
                setLoadingServer(false);
                const user = JSON.parse(response)
                if (user.login === login && user.password === password) {
                    setToken('asdasda32423sdasdasda');
                    setAuthorized(true);
                    setUserAccountHandler(user.name);
                    setAlertMessageHandler(true, 'Успешно авторизован!');
                } else {
                    setAlertMessageHandler(false, 'Ошибка! Неправильный логин или пароль!');
                }
            },
            error => {
                alert(`Rejected: ${error}`)
            }
        );
    }

    const logout = () => {
        if (authorized) {
            setAuthorized(false);
            setToken('');
            setAlertMessageHandler(true, 'Выход выполнен');
        }
    }

    const authForm = (<AuthForm onLogin={(login, password) => onLoginHandler(login, password)}/>)

    const account = (<div className={styles.authorized}>
        <h1>Привет, {userInfo.username}</h1>
        <button className={styles.logoutBtn} onClick={logout} type={'button'}>Выйти</button>
    </div>)

    const Content = authorized ? account : authForm

    return (
        <div className={classnames(styles.wrapper, {[styles.loading]: loadingServer})}>
            {loadingServer && <Loader/>}
            {Content}
            <AuthMessages message={alertMessage.text} template={alertMessage.success}
                          hideMessage={() => setAlertMessage('')}/>
        </div>
    );
};

export default FormAuth;
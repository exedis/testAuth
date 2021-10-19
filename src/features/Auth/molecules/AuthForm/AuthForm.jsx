import React, {useState} from 'react';
import styles from './AuthForm.module.scss';
import logo from '../../../../assets/img/logo.svg'

const AuthForm = ({onLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setEmailHandler = (val) => {
        setEmail(val);
    }
    const setPasswordHandler = (val) => {
        setPassword(val);
    }
    const login = (e) => {
        e.preventDefault();
        onLogin(email, password)
    }

    return (
        <form action="" className={styles.authForm} onSubmit={(e) => login(e)}>
            <div className={styles.formControl}>
                <img src={logo} alt=""/>
                <div className={styles.title}>Авторизация</div>
            </div>
            <div className={styles.formControl}>
                <input required type="email" className={styles.input} placeholder={'Email'} name={'email'} value={email}
                       onChange={(e) => setEmailHandler(e.target.value)}/>
            </div>
            <div className={styles.formControl}>
                <input required type="password" className={styles.input} placeholder={'Пароль'} name={'pass'}
                       value={password}
                       onChange={(e) => setPasswordHandler(e.target.value)}/>
            </div>

            <div className={styles.formControl}>
                <button className={styles.btn} type={'submit'}>Войти</button>
            </div>
        </form>
    );
};

export default AuthForm;
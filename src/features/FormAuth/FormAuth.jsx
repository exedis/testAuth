import React, {useState, useEffect} from 'react';

const FormAuth = () => {

    const [loadingServer, setLoadingServer] = useState(false);
    const [errors, setErrors] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataFromServer, setDataFromServer] = useState('');

//     const checkAuth = () = {
// return 1;
//     }
    if (localStorage.getItem('token')) {
        console.log('token', localStorage.getItem('token'))
    }

    async function auth(e) {
        e.preventDefault();
        setLoadingServer(true);


        //запрашиваем данные из бд
        let data = {
            login: 'dev@dev.com',
            password: '123',
            token: '132132asdasd',
            authorized: false,
        }
        data = JSON.stringify(data);

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {//имитируем задержку ответа
                resolve(data);
                setLoadingServer(false);
            }, 1000)
        });

        let result = await promise.then((value => {

            const valueFromServer = JSON.parse(value)
            console.log('valueFromServer', valueFromServer)
            if (valueFromServer.login === email && valueFromServer.password === password) {
                localStorage.setItem('token', 'asdasda32423sdasdasda');
                console.log('success')
            } else {
                console.log('failure');
                setErrors('Ошибка! Неправильный логин или пароль!')
                setTimeout(() => {
                    setErrors('');
                }, 2000)
            }

        }));

        return result;

    }


    const setEmailHandler = (val) => {
        setEmail(val);
    }
    const setPasswordHandler = (val) => {
        setPassword(val);
    }

    return (
        <div>
            {loadingServer && <div>Загрузка</div>}
            {errors && <div className={'error'}>{errors}</div>}
            <form action="" onSubmit={(e) => auth(e)}>
                <div className="formControl">
                    <div className="title">Выполнить вход</div>
                </div>
                <div className="formControl">
                    <input required type="email" placeholder={'Почта'} name={'email'} value={email}
                           onChange={(e) => setEmailHandler(e.target.value)}/>
                </div>
                <div className="formControl">
                    <input required type="password" placeholder={'Пароль'} name={'pass'} value={password}
                           onChange={(e) => setPasswordHandler(e.target.value)}/>
                </div>
                <div className="formControl">
                    <button type={'submit'}>Войти</button>
                </div>
            </form>
        </div>
    );
};

export default FormAuth;
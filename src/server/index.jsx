//return 123123;

const server = () => {
    const data = {
        login: 'dev@dev.com',
        password: '123',
        token: '132132asdasd',
        authorized: false,
    }
    return JSON.stringify(data);
    // return {
    //     auth: function (login, pass) {
    //         if (login === data.login && pass === data.password) {
    //             const token = 'asdasdasd';
    //             return [true,token]
    //         }else{
    //             return 'error';
    //         }
    //     }
    // }

}

export default server;
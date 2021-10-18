//return 123123;
import React from 'react';

const Server = () => {

    setTimeout(() => {
        console.log('data loaded')
    },500)

    const data = {
        login: 'dev@dev.com',
        password: '123',
        token: '132132asdasd',
        authorized: false,
    }
    return JSON.stringify(data);

};

export default Server;
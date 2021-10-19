import React from 'react';
import styles from './Loader.module.scss';
import loader from '../../../../assets/img/loader.svg'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Loader;
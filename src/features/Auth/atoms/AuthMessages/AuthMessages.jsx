import classnames from "classnames";
import React, {useEffect} from 'react';
import styles from "./AuthMessages.module.scss";

const AuthMessages = ({message, template, hideMessage}) => {

    useEffect(() => {
        const messageTimer = setTimeout(() => {
            hideMessage();
        }, 2000)
        return () => {
            clearTimeout(messageTimer);
        };
    });
    if (!message) {
        return null;
    }
    return (
        <div className={classnames(styles.message, {[styles.error]: !template})}>
            {message}
        </div>
    );
};

export default AuthMessages;
import styles from './Dialog.module.css';
import React, {useState} from 'react';


const Dialog = props => {

    

    const okayHandler = () => {
        console.log(props.show);
        props.onHidden(false);
    }

    return (
        <div style={{visibility : props.show ? 'visible' : 'hidden'}} className={styles.dialog}>
            <div className={styles.dialog_items}>
                <div className={styles.dialog_container}>
                    <div className={styles.dialog_header}>
                        <h2>Invalid input</h2>
                    </div>
                    <div className={styles.message}>
                        <div className={styles.message_inner}>
                            <p>{props.message}</p>
                        </div>
                        <button onClick={okayHandler}>Okay</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dialog;
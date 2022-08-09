import styles from './Form.module.css';

import React,{useState} from 'react';

const Form = props => {

    const [usernameInput, setUsernameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');



    const usernameHandler = event => {
        setUsernameInput(event.target.value);
    }

    const ageHandler = event => {
        setAgeInput(event.target.value)
    }

    const submitFormHandler = event => {
        event.preventDefault();

        if(usernameInput.trim().length === 0 || ageInput.toString().trim().length === 0){

            props.onShowHandler( true , 'Please enter a valid name and age (non-empty values).');
            return;
        } else if(ageInput < 0){
            props.onShowHandler( true ,'Please valid enter age(> 0).');
            return;
        }

        props.onAddHandler(usernameInput, ageInput);
        setUsernameInput('');
        setAgeInput('');
    }


    return (
        
    <form className={styles.form} onSubmit={submitFormHandler}>
        <label><h3>Username</h3></label>
        <input type='text'  value={usernameInput} onChange={usernameHandler}/>
        <label><h3>Age(Years)</h3></label>
        <input type='number' value={ageInput} onChange={ageHandler} />
        <button>Add User</button>
    </form>);
}

export default Form;
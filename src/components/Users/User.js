import styles from './Users.module.css';

const User = props => {
    return (
        <p className={styles.text}>{props.user.username} ({props.user.age} years old)</p>
     );
}
 
export default User;
import styles from './Users.module.css';

import User from "./User";


const Users = props => {
    return ( <div>
        {props.users.map( user => <div className={styles.user} key={user.id}><User user={user} /></div>)}
    </div> );
}
 
export default Users;
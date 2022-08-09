import React, {useState} from "react";
import Users from "./components/Users/Users";

import styles from "./components/Cards/Cards.module.css";
import Form from "./components/Form/Form";

import Dialog from "./components/Dialog/Dialog";



function App() {

  const [users, setUsers] = useState([]); 
  const [isEmpty, setIsEmpty] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState('');

  const addUser = (username, age) => {
    const updateList = [
      {
        username : username,
        age : age, 
        id : Math.floor(Math.random() * 1000)
      }, 
      ... users
    ]

    setUsers(updateList);
    setIsEmpty(false);

  }

  const showDialogHandler = (show, message) => {
    setShowDialog(show);
    setMessage(message);
  }

  const hiddenHandler = show => {
    setShowDialog(show);
  }
 



  return (
    <div>
      <div className={styles.cards}>
        <Form onAddHandler={addUser} onShowHandler={showDialogHandler}/>
      </div>
      <div style={{display : isEmpty ? 'none' : 'block'}} className={styles.cards}>
        <Users users={users}/>
      </div>

      <Dialog message={message} show={showDialog} onHidden={hiddenHandler}/>
      
    </div>
  );
}

export default App;

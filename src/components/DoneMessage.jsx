import styles from "./DoneMessage.module.css"

function DoneMessage(){
  return <div className={styles.message}>
    <h1>Hurray your all task is done !</h1>
    <p>Enjoy your day...</p>
  </div>
} 

export default DoneMessage;
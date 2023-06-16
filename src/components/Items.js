import React from "react";
import styles from '../style/todo.module.css'

function Items(props) {
    
  return (
    <>
    <span className={styles.items}>
        <h3 className={styles.delete} onClick={() =>{
          props.onSelect(props.id)
        }} >✕</h3>
        <li>{props.datavalue}</li>
      </span>
    </>
  );
}
export default Items;
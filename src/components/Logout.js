import React, { useContext, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../context/auth-context";
import Items from "./Items";
import styles from '../style/todo.module.css'

function Logout(props) {
  const auth = getAuth();
  const navigate = useNavigate();
  const [data, setdata] = useState();
  const [item, setitem] = useState([]);
  const log = () => {
    signOut(auth)
      .then(async () => {
        localStorage.setItem("logtype", JSON.stringify(false));
        alert("Signout successfully");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const inpvalue = (e) => {
    setdata(e.target.value);
  };

  const addItem = () => {
    if (!data) return;
    setitem((olditem) => {
      return [...olditem, data];
    });
    setdata("");
    console.log(item);
  };
  const deleteItem = (id) => {
    console.log("deleted");
    setitem((olditem) => {
      return olditem.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className={styles.center} style={{marginTop:"20px", gap:"30px", flexDirection:"row", alignItem:"end"}}>
      <div className={styles.maindiv}>
        <h2>ToDoList</h2>
        <div className={styles.todo_main}>
          <input
            type="text"
            placeholder="Add an Item"
            onChange={inpvalue}
            value={data}
            className={styles.inp}
          />
          <button onClick={addItem}>+</button>
        </div>
        {item.map((value, index) => {
          return (
            <Items
              datavalue={value}
              onSelect={deleteItem}
              key={index}
              id={index}
            />
          );
        })}
      </div>
      <div style={{ textAlign: "center", margin: "50px" }}>
        <button className={styles.btn} onClick={log}>Logout</button>
      </div>
      <h2 >{props.name}</h2>
    </div>
  );
}
export default Logout;

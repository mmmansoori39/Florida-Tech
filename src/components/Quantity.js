import "../style/style.css";
import "../style/bootstrap.min.css";
import React, { useState } from "react";

function Quantity() {

    const [num, setnum]= useState(1);
    const add=()=>{
        setnum(num + 1);
    };
    const sub=()=>{
        if(num<=1) return
        setnum(num - 1);
    };

  return (
    <div className="row">
      <div className="col-md-12">
        <div
          className="qty"
          style={{"display":"flex", "margin":"0px 36px 0px 0px", "width":"76%"}}
        >
          <span className="minus0 bg-dark" onClick={sub}>-</span>
          <input type="number" className="count0" name="qty" value={num} />
          <span className="plus0 bg-dark" onClick={add}>+</span>
        </div>
      </div>
    </div>
  );
}
export default Quantity;

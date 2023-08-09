import React from "react";
import Button from "./Button";


function FormSplitBill(){
    return(
      <form className="form-split-bill">
        <h2>Split a bill wth X</h2>
  
        <label>💰Bill Value</label>
        <input type="text"/>
  
        <label>🤵Your expense</label>
        <input type="text" />
  
        <label>🧑‍🤝‍🧑X's expense</label>
        <input type="text" />
  
        <label>💰 Who is paying the Bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend">X'S Name</option>
        </select>
  
        <Button>Split Bill</Button>
  
      </form>
    )
  }

  export default FormSplitBill;
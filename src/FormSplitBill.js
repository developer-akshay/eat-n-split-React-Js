import React, { useState } from "react";
import Button from "./Button";


function FormSplitBill({selectedFriend,onSplitBill}){
  const [bill,setBill]= useState("")
  const [paidByUser,setPaidByUser]=useState("")
  const paidByFriend = bill? bill - paidByUser : ""
  const [whoIsPaying,setWhoIsPaying]=useState("user")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!bill  || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user'? paidByFriend : -paidByUser)
  }
  
    return(
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill wth {selectedFriend.name?selectedFriend.name:selectedFriend.namee}</h2>
        
        <label>💰Bill Value</label>
        <input 
          type='number' 
          value={bill}
          onChange={(e)=>setBill(Number(e.target.value))}
        />
  
        <label>🤵Your expense</label>
        <input 
          type='number' 
          value={paidByUser}
          onChange={(e)=>setPaidByUser(
          Number(e.target.value) > bill ? bill : Number(e.target.value)
          )} 
        />
  
        <label>🧑‍🤝‍🧑{selectedFriend.name?selectedFriend.name:selectedFriend.namee}'s expense</label>
        <input type="number" disabled value={paidByFriend}/>
  
        <label>💰 Who is paying the Bill</label>
        <select 
          value={whoIsPaying}
          onChange={(e)=>setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name?selectedFriend.name:selectedFriend.namee}</option>
        </select>
  
        <Button>Split Bill</Button>
  
      </form>
    )
  }

  export default FormSplitBill;
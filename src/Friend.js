import React from "react"
import Button from './Button';

function  Friend ({friend}){
    console.log('friends :',friend)
    return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{(friend.name?friend.name:friend.namee)}</h3>
      {friend.balance <0 && (
        <p className="red">
          you owe {(friend.name?friend.name:friend.namee)} Rs {Math.abs(friend.balance)}  
        </p>
      )}
      {friend.balance >0 && (
        <p className="green">
          {(friend.name?friend.name:friend.namee)} owe you Rs {Math.abs(friend.balance)}  
        </p>
      )}
      {friend.balance ===0 && (
        <p>
          you and {(friend.name?friend.name:friend.namee)} are even. 
        </p>
      )}
      <Button >Select</Button>
    </li>
      )
  }

  export default Friend;
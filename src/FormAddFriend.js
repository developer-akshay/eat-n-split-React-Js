
import React,{useState} from "react";
import Button from './Button'; 


function FormAddFriend({onAddFriend}){
    const [namee,setName]=useState('')
    const [image,setImage]=useState('https://i.pravatar.cc/48');
    
    const handleSubmit = (e)=> {
      //at single page application we need this as it prevents reloading of app
      e.preventDefault();
  
      //if there's no name or image it will not execute below code
      if(!namee || !image ) return;
  
      const id = crypto.randomUUID();
      const newFriend={
        id,
        namee,
        image:`${image}?=${id}`,
        balance:0
      }
      
      onAddFriend(newFriend)
      
      //setting values to default 
      setName('');
      setImage('https://i.pravatar.cc/48');
  
    }
    return(
      <form className="form-add-friend"
      onSubmit={handleSubmit}
      >
        <label>🧑‍🤝‍🧑Friend Name</label>
        <input type="text" 
        value={namee}
        onChange={(e)=>setName(e.target.value)}
        />
  
        <label>🖼️ Image Url</label>
        <input type="text"
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        />
  
        <Button>Add</Button>
      </form>
    )
  }

  export default FormAddFriend;
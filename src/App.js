import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button ({children,onClick}){
  return <button className="button" onClick={onClick} >{children}</button>
}

function App() {
  const [friends,setFriends]=useState(initialFriends);
  const [showAddFriend,setShowAddFriend]=useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend((show)=>!show)
  }

  const handleAddFriend= (friend) => {
    //we don't use push here because it will add value to state and will not do rerender 
    //as react is immuatable you should create a new array of friends instead of updating it
    setFriends((friends)=>[...friends,friend])
    setShowAddFriend(false)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends}/>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        
        <Button onClick={handleShowAddFriend}>{showAddFriend?'Close':'Add Friend'}</Button>
        
        
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

function FriendList ({friends}){
  return (
  <ul>
    {friends.map((friend)=>(
      <Friend friend={friend} key={friend.id}/>
    ))}
    
  </ul>
  
  )
}

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
    console.log('before handle submit',newFriend)
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

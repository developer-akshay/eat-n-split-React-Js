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



function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
        
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

function FriendList (){
  const friends=initialFriends;
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
    <h3>{friend.name}</h3>
    {friend.balance <0 && (
      <p className="red">
        you owe {friend.name} Rs {Math.abs(friend.balance)}  
      </p>
    )}
    {friend.balance >0 && (
      <p className="green">
        {friend.name} owe you Rs {Math.abs(friend.balance)}  
      </p>
    )}
    {friend.balance ===0 && (
      <p>
        you and {friend.name} are even. 
      </p>
    )}
    <Button >Select</Button>
  </li>
    )
}

function Button ({children}){
  return <button className="button">{children}</button>
}

function FormAddFriend(){
  return(
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend Name</label>
      <input type="text"/>

      <label>🖼️ Image Url</label>
      <input type="text" />

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

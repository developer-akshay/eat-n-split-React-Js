import React, { useState } from 'react';
import FriendList from './FriendList';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';
import Button from './Button';


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
  const [friends,setFriends]=useState(initialFriends);
  const [showAddFriend,setShowAddFriend]=useState(false);
  const [selectedFriend,setSelectedFriend]=useState(null)

  const handleShowAddFriend = () => {
    setShowAddFriend((show)=>!show)
  }

  const handleAddFriend= (friend) => {
    //we don't use push here because it will add value to state and will not do rerender 
    //as react is immuatable you should create a new array of friends instead of updating it
    setFriends((friends)=>[...friends,friend])
    setShowAddFriend(false)
  }

  const handleSelection = (friend) =>{
    // setSelectedFriend(friend);
    console.log({friend});

    // FIRST WAY

    // const selectedFriedIfPassed = (selectedFriend?.id === friend?.id)?null:friend;
    // setSelectedFriend(selectedFriedIfPassed);


    // SECOND WAY

    // const selectedFriedIfPassed = (selectedFriend?.id === friend?.id)?null:friend;
    // setSelectedFriend(selectedFriedIfPassed);
    
    // setSelectedFriend((cur)=>{
    //   console.log({cur});
    //   return ((cur?.id=== friend?.id)?null:friend);
    // })

    // THIRD WAY

    setSelectedFriend((cur)=>((cur?.id=== friend?.id)?null:friend))
    setShowAddFriend(false)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList 
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}  
        <Button onClick={handleShowAddFriend}>{showAddFriend?'Close':'Add Friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
      
    </div>
  );
}         

export default App;


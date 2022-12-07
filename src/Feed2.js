import React, { useState } from "react";
import './Feed.css'
//import Button from "./Button";
import { mockComponent } from "react-dom/test-utils";
import moment from 'moment';
import { FaHeart ,FaRegHeart } from "react-icons/fa";
import { BsHeartFill, BsHeart } from "react-icons/bs";

function App() {
  // State Hook - `useState`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  const [likes,setLikes]=useState(0);

  function LikeItem(id){
        setLikes(likes+1);
        items.map((item)=>{
          if(item.id==id)
          {
            item.likes=item.likes+1;
          }

        });

  }
  function disLikeItem(id){
    setLikes(likes-1);
    items.map((item)=>{
      if(item.id==id)
      {
        item.likes=item.likes-1;
      }

    });
}

  // Helper Functions

  /* Adds a new item to the list array*/
  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      likes:0,
    };

    // Add new item to items array
    setItems((oldList) => [ item,...oldList]);

    // Reset newItem back to original state
    setNewItem("");
    setLikes(0)
  }

  /* Deletes an item based on the `item.id` key */
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

 /*/* function likeHandler(id){
    items.map((item)=> 
      if(item.id === id) 
          setLikes(likes+1))
        
   }

  /* Edit an item text after creating it. */
  function editItem(id, newText) {
    // Get the current item
    const currentItem = items.filter((item) => item.id === id);

    // Create a new item with same id
    const newItem = {
      id: currentItem.id,
      value: newText,
      likes:0,
    };

    deleteItem(id);

    // Replace item in the item list
    setItems((oldList) => [ newItem,...oldList]);
    setUpdatedText("");
    setShowEdit(-1);
  }

 // function likeHandler(value){
   // setLikes(likes+1)
  // }

  const handleSort = () => {
    setItems([...items].sort((a, b) => b.likes - a.likes))
  }
  // Main part of app
  return (
    <div className="app">
      
      {/* 1. Header  */}
    <div>  
      <h1>Face Book </h1>

      
     </div>
     <a onClick={handleSort} > SORT</a>
      <br/>

     
      <br/>

      {/* 2. Add new item (input) */}
      <textarea
        type="text"
        rows="5"
        cols="50"
        placeholder="Add a post..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      >
        &nbsp;&nbsp;<br/>
        </textarea>
     
      {/* Add (button) */}
      <a className="button_sub" onClick={() => addItem()}>Add</a>

      {/* 3. List of feeds (unordered list) */}

      
      <ul>
        {items.map((item) => {
          return (
            <div >
              <div  className="feed-screen">
              <li key={item.id} >
                {console.log(item.id)}
                {console.log(item.likes)}
                {console.log(item.value)}
               <textArea rows="8" cols="50"> {item.value} &nbsp;&nbsp;<br/ > </textArea>
              </li>
            
            {moment().utcOffset('+05:30').format('DD-MM-YYYY ')}
                <a
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </a>
                &nbsp;&nbsp;
               likes: {item.likes}   &nbsp;&nbsp;
                <a
                  className="delete-button"
                  onClick={() => LikeItem(item.id)}
                >
                 {<FaHeart   style={{color: 'red'}}/>}
                </a>
                <a
                  className="delete-button"
                  onClick={() => disLikeItem(item.id)}
                >
                 {<BsHeart  />}
                </a>


               <a
                  className="up-button"
                  onClick={() => setShowEdit(item.id)}
                >
                  update
                </a>
                </div>
                {showEdit == item.id ? (
                <div>
                  <textArea
                  rows="8"
                  cols="50"
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  ></textArea>
                  <a  className="up-button" onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </a>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

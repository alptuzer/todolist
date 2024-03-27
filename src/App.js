import React, {useState } from 'react'; 
import './App.css';

function   App () {
   const [newItem,setNewItem] = useState("");
   const [items,setItems]=useState([]);
   
   function degistir (e){
    setNewItem(e.target.value)
   }


   function addItems() {

    if(!newItem){
      alert("enter");
      return;
    }
    const yeni = {
      id: Math.floor(Math.random()*1000),
      value : newItem
    }

    setItems(oldItems => [...oldItems,yeni])
    setNewItem("")


   }
    return (
      <div className="App">
        <h1>To Do List App</h1>
        <input type="text" placeholder='buraya giriniz yeni sayiyi' value={newItem} onChange={(e)=> degistir(e)}/>  
        <button onClick={()=> addItems()}>Bas</button>
        <h2>{newItem} </h2>
          <ul>
            {items.map((item) => {
              return(
                <li key={item.id}> {item.value}</li>
              )
            })}
          </ul>
      </div>
    );
  }


export default App;

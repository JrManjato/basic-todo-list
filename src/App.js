import './App.css';
import React, { useState } from "react";
import List from './common/components/List';

function App() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addItem(e) {
    e.preventDefault();
    // ! Check for empty item
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Date.now(),
      value: newItem,
      scale: 'todo'
    };

    // Add new item to items array
    setList((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='col'>
          <h1>Enter a task</h1>
          <form
            className="form col-md-10"
            onSubmit={(e) => {
              addItem(e);
            }}
          >
            <input
              type="text"
              placeholder="Add a task..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </form>
        </div>
        <div className='col'>
          <h1>To do</h1>
          <List list={list} scale='todo' isCheckable={true} setList={setList} />
        </div>
        <div className='col'>
          <h1>Done</h1>
          <List list={list} scale='done' isCheckable={false} setList={setList} />
        </div>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from "react";

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

  // Deletes an item based on the `item.id` key
  function deleteItem(id) {
    const newArray = list.filter((item) => item.id !== id);
    setList(newArray);
  }

  function updateScale(id) {
    // Get the current item
    const currentItem = list.filter((item) => item.id === id);

    // Create a new item with the updated scale
    const newItem = {
      id: currentItem[0].id,
      value: currentItem[0].value,
      scale: 'done'
    };

    deleteItem(id);

    // Update the list
    setList((oldList) => [...oldList, newItem]);
  }

  return (
    <div className="App">
      <header className="App-header">
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

        <h1>To do</h1>
        <ul>
          {list.map((item) => item.scale === 'todo' && (
            <li key={item.id}>
              {item.value}
              <input
                type="checkbox"
                onChange={() => updateScale(item.id)}
              />
            </li>
          ))}
        </ul>


        <h1>Done</h1>
        <ul>
          {list.map((item) => item.scale === 'done' && (
            <li key={item.id}>
              {item.value}
            </li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;

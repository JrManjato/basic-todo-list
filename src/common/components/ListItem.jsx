import React from 'react'

export default function ListItem({ id, text, isCheckable, setList, list }) {
    
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
        <li key={id}>
            {isCheckable &&
                <input
                    type="checkbox"
                    id={text}
                    onChange={() => updateScale(id)}
                />
            }
            <label htmlFor={text}>{text}</label>
        </li>
    )
}

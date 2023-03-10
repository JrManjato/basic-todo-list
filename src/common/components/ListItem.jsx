import React from 'react';

const ListItem = ({ id, text, isCheckable, setList, list, scale }) => {

    // Deletes an item based on the `item.id` key
    const deleteItem = (id) => {
        const newArray = list.filter((item) => item.id !== id);
        setList(newArray);
    }

    const updateScale = (id) => {
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
        <li key={id} data-testid={scale}>
            {isCheckable &&
                <input
                    type="checkbox"
                    id={text}
                    onChange={() => updateScale(id)}
                    data-testid="checkbox"
                />
            }
            <label htmlFor={text}>{text}</label>
        </li>
    )
}

export default ListItem;
